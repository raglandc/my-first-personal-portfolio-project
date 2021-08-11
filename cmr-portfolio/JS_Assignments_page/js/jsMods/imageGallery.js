export default function imageGallery() {
  //assignment of variables
  const requestUrl =
    "https://api.unsplash.com/search/photos?query=code&client_id=vDKFNt41yIRQqaYU1HuCFzmBxzDcFguDYAGxTEw7p7s";

  //area to display photos
  const photos = document.querySelector(".gallery-photos");
  const text = document.querySelector(".gallery-photos-text");

  //list related
  const list = document.querySelector(".gallery-list");

  //search input
  const searchInput = document.querySelector(".gallery-searchInput");
  const searchBTN = document.querySelector(".gallery-searchBTN");

  //buttons
  const zoomIn = document.querySelector(".fa-search-plus");
  const zoomOut = document.querySelector(".fa-search-minus");
  const refresh = document.querySelector(".fa-refresh");

  //search for photos and display list
  searchBTN.addEventListener("click", () => {
    let newUrl = requestUrl.replace("query=code", `query=${searchInput.value}`);

    //empty the search box
    searchInput.value = "";

    //empty the current list
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
    //store new photos in list
    storePhotos(newUrl);
  });

  //storing the photos in a list
  async function storePhotos(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i <= 4; i++) {
          //individual url to pic
          let pic = data.results[i].urls.regular;

          //add pics to list
          let li = document.createElement("li");

          //event listener once you select an image to view
          list.appendChild(li).addEventListener("click", () => {
            text.classList.add("hidden");
            photos.classList.remove("hidden");
            photos.src = pic;
          });
          li.classList.add("list-pic");
          li.style.backgroundImage = `url(${pic})`;
        }
      })
      .catch(() => {
        photos.classList.add("hidden");
        text.classList.remove("hidden");
        text.innerHTML =
          "Could not find any photos with that, try somthing else.";
        setTimeout(() => {
          text.innerHTML =
            "Search for a photo and select one to get a better view.";
        }, 6180);
      });
  }

  //button functionality

  //zoom in
  zoomIn.addEventListener("click", () => {
    let currWidth = photos.clientWidth;
    let currHeight = photos.clientHeight;
    photos.style.width = currWidth + 13 + "px";
    photos.style.height = currHeight + 13 + "px";
    photos.style.maxHeight = "127%";
    photos.style.maxWidth = "113%";
  });

  //zoom out
  zoomOut.addEventListener("click", () => {
    let currWidth = photos.clientWidth;
    let currHeight = photos.clientHeight;

    photos.style.width = currWidth - 13 + "px";
    photos.style.height = currHeight - 13 + "px";
  });

  //refresh image
  refresh.addEventListener("click", () => {
    photos.style.maxWidth = "auto";
    photos.style.maxHeight = "100%";
  });
}
