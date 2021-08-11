
import refLib from './varLibrary.js';

const produce = refLib.produce;
const detailedProduceList = refLib.detailedProduceList;


var loopDisplay = document.getElementById("loopDisplay");
var listCode = "";
var unorderedList = "<ul>" + listCode + "</ul>";
var i;


function decItems(){
    for(i=0; i<produce.length; i++){
        var listItem = "<li>" + i + ": "+ produce[i] + "</li>";
        listCode+= listItem;
    }
    return listCode;
}
function impItems(){
    produce.forEach((item, i)=>{
        var listItem = "<li>" + i + ": " + item + "</li>";
        listCode += listItem;
        return listCode;
    });
}
export default function updateLoopDisplay(codeType){
    listCode = "";
    if(codeType == 'Declarative'){
        decItems();
    }if(codeType == 'Imperative'){
        impItems();
    }else {
        console.log('What is your codeType?!');
    }
    unorderedList = "<p>" + codeType + "</p><ul>" +listCode+ "</ul>";
    loopDisplay.innerHTML = unorderedList;

}