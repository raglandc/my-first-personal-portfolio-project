const getData = () => {
  const btn = document.querySelector(".databaseBTN");
  let display = document.querySelector(".dataContainer").innerHTML;

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    fetch("./PHP/myDatabase.php")
      .then((results) => results.json())
      .then((response) => {
        console.log(response);
        let output = "";
        for (let i in response) {
          output += `
        <li>
        <h2>${response[i].itemName}</h2>
        <p>Vendor: ${response[i].itemVendor}</p>
        <p>Amount in stock: ${response[i].stock}</p>
        <p>Price: $${response[i].price}</p>
        </li>
        `;
        }
        display = output;
      })
      .catch(
        (error) =>
          (display = `<p>There was a problem in loading the produce: ${error}</p>`)
      );
  });
};

export default getData;
