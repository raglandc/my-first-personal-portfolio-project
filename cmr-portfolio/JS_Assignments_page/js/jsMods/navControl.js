export default function navControl() {
  let navigation = $("nav");
  let navIcon = $("#navControl > i");
  let isOpen = navigation.css("display") == "flex";
  let isClosed = navigation.css("display") == "none";

  if (isOpen === true && isClosed === false) {
    navigation.css("display", "none");
    navIcon.removeClass("fa fa-times-circle");
    navIcon.addClass("fa fa-bars");
  } else if (isOpen === false && isClosed === true) {
    navigation.css("display", "flex");
    navIcon.removeClass("fa fa-bars");
    navIcon.addClass("fa fa-times-circle");
  } else {
    console.log("error");
  }
}
