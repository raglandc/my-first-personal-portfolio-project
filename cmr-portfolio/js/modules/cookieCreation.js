export default function cookieCreation() {
  $("#cookieCreation").click(function () {
    $(".cookie-text").addClass("hidden");
    $("#myForm").removeClass("hidden");
  });

  $("#myForm__showCookie").click(function showCookie() {
    //getting cookie value entered from user
    const cookieValue = $("#myForm__name").val();

    if (cookieValue === "") {
      $("#myForm__cookieText").text("Please enter a value and press submit");
    } else {
      //showing value entered by user to console
      $("#myForm__cookieText").text(`Your cookie name: ${cookieValue}`);
      document.cookie = "name =" + cookieValue; //setting up the expiration

      let now = new Date();
      now.setMonth(now.getMonth() + 1);
      document.cookie = "name = " + cookieValue;
      document.cookie = "exspires = " + now.toUTCString() + ";";

      const allCookies = unescape(document.cookie);
      $("#myForm__cookieText").text(
        `Displaying all available cookies: ${allCookies}`
      );
    }
  });
  $("#myForm__clearCookie").click(function clearCookie() {
    const cookieValue = $("#name").val();

    if (cookieValue === "") {
      $("#myForm__cookieText").text(`Input field is already clear`);
    } else {
      document.cookie = "name=;";

      let now = new Date();
      now.setMonth(now.getMonth() - 100);

      document.cookie = "exspires=" + now.toUTCString() + ";";
      $("#myForm__name").val("");
      $("#myForm__cookieText").text(
        `cookie has been cleared: ${document.cookie}`
      );
    }
  });
}
