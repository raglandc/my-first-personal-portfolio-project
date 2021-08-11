import updateMadLib from "./jsMods/stringMod.js";
import refLib from "./jsMods/varLibrary.js";
import updateLoopDisplay from "./jsMods/produceLoop.js";
import updateObjectDisplay from "./jsMods/produceObject.js";
import displayArray from "./jsMods/produceArray.js";
import accordianControl from "./jsMods/accordianControl.js";
import navControl from "./jsMods/navControl.js";
import Calculator from "./jsMods/numbersAssignment.js";
import formValidation from "./jsMods/formValidation.js";
import cookieControl from "./jsMods/cookieAssignment.js";
import pluginDisplayFunc from "./jsMods/pluginAssignment.js";
import imageGallery from "./jsMods/imageGallery.js";
import canvas from "./jsMods/canvasScript.js";
import getData from "./jsMods/database.js";

const madLib = refLib.madLib;
const produce = refLib.produce;
const detailedProduceList = refLib.detailedProduceList;

//calculator assignments
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);
// end calculator assignments

//cookie function
function cookieButton() {
  document.querySelectorAll(".cookieButton").forEach((item) => {
    item.addEventListener("click", (event) => {
      cookieControl(event.target.value);
    });
  });
}

//begin functionality
$(document).ready(function () {
  displayArray(produce, document.getElementById("loopDisplay"));
  document.getElementById("madLibDisplay").innerHTML = madLib;
  document.getElementById("madLibBTN").addEventListener("click", updateMadLib);

  document.getElementById("decBTN").addEventListener("click", () => {
    updateLoopDisplay("Declarative");
  });
  document.getElementById("impBTN").addEventListener("click", () => {
    updateLoopDisplay("Imperative");
  });
  document.getElementById("objBTN").addEventListener("click", () => {
    updateObjectDisplay("Objects");
  });

  $(".accordianControl").click((item) => {
    accordianControl(item);
  });

  document.getElementById("navControl").addEventListener("click", navControl);

  //calculator buttons

  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    });
  });
  operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    });
  });
  equalsButton.addEventListener("click", (button) => {
    calculator.compute();
    calculator.updateDisplay();
  });
  allClearButton.addEventListener("click", (button) => {
    calculator.clear();
    calculator.updateDisplay();
  });
  deleteButton.addEventListener("click", (button) => {
    calculator.delete();
    calculator.updateDisplay();
  });

  //end calculator

  //form validation
  formValidation();
  //end form validation

  //cookies
  cookieButton();
  //end cookies

  //plugin display
  pluginDisplayFunc("pluginDisplay-text");
  //end plugin display

  //image gallery
  imageGallery();
  //end image gallery

  //canvas
  canvas();
  //end canvas

  //database
  getData();
  //end database
});
