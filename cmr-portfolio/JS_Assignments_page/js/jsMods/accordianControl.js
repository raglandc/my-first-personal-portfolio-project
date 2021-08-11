export default function accordianControl(item) {
  let accordianItem = $("#" + $(item.target).parent().prop("id")).children(
    ".accordian"
  );

  let isOpen = accordianItem.css("display") == "flex";
  let isClosed = accordianItem.css("display") == "none";

  if (isOpen === true && isClosed === false) {
    $("#" + $(item.target).parent().prop("id"))
      .children(".accordian")
      .css("display", "none");
  } else if (isOpen === false && isClosed === true) {
    $("#" + $(item.target).parent().prop("id"))
      .children(".accordian")
      .css("display", "flex");
  } else {
    console.log("error");
  }
}
