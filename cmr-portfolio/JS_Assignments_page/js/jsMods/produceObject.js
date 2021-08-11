import refLib from "./varLibrary.js";

const produce = refLib.produce;
const detailedProduceList = refLib.detailedProduceList;

export default function updateObjectDisplay(){
    let produceDescription = detailedProduceList.map((item, i) => {
        return 'A '+ item.produceName + ' is a ' + item.type + ' that is ' + item.flavor
        + ', '+ item.color + ' and a '+ item.shape + '.'})
    return objectDisplay.innerHTML = produceDescription;
}
