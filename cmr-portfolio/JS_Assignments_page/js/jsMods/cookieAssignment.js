//for your convinience
// document.getElementById(playground);
// document.getElementById("actionBTN");
var globalvar = document.cookie;
//do your scripting here

function writeCookie() {
  //or play with scripting here
  document.getElementById("playground").innerHTML = "Cookies Made"; //status
  globalvar = document.getElementById("cookieText").value;
  document.cookie = globalvar; //updating cookie
  document.getElementById("currentCookies").innerHTML = document.cookie; //display
  return globalvar; //return granting access to string
}

function readCookie() {
  document.getElementById("playground").innerHTML = "Cookies Read"; //status
  document.getElementById("currentCookies").innerHTML = document.cookie; //display
  document.getElementById("cookieText").value = document.cookie; // making available to edit
}

function editCookie() {
  if (document.cookie == document.getElementById("cookieText").value) {
    document.getElementById("playground").innerHTML = "No Changes Entered"; //status
    document.getElementById("currentCookies").innerHTML = document.cookie; //display
  } else if (document.getElementById("cookieText").value == "") {
    document.getElementById("playground").innerHTML = "No Text Entered"; //status
    document.getElementById("currentCookies").innerHTML = document.cookie; //display
  } else if (!document.getElementById("cookieText").value.includes("=")) {
    document.getElementById("playground").innerHTML = "No key value pair"; //status
    document.getElementById("currentCookies").innerHTML = document.cookie; //display
  } else {
    document.getElementById("playground").innerHTML = "Cookies Updated"; //status
    globalvar = document.getElementById("cookieText").value;
    document.cookie = globalvar; //updating cookie
    document.getElementById("currentCookies").innerHTML = document.cookie; //display
  }

  return globalvar; //return updateing access to string
}

function deleteCookie() {
  document.getElementById("playground").innerHTML = "Cookies Deleted"; //status
  var now = new Date(); //creating a date
  globalvar += "; Expires = " + now.toUTCString() + ";"; //adding dat as a UTC timestamp to the string
  document.cookie = globalvar; //updating cookie
  document.getElementById("currentCookies").innerHTML = document.cookie; //display
  return globalvar;
}

export default function cookieControl(action) {
  if (action == "Create") {
    writeCookie();
  } else if (action == "Read") {
    readCookie();
  } else if (action == "Edit") {
    editCookie();
  } else if (action == "Delete") {
    deleteCookie();
  }
}
