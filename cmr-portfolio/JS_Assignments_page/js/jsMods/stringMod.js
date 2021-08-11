import refLib from "./varLibrary.js";

const madLib = refLib.madLib;

let adjectives = {};
let verbs= {};
let nouns = {};

export default function updateMadLib(){
    let madLibArray = madLib.split(" ");
    let adjCount = 1;
    let verbCount = 1;
    let nounCount = 0;
    document.querySelectorAll('input').forEach((item, i) => {
        if(item.type == "text"){
            if(item.id.includes('adjective')){
                adjectives[item.id] = item.value ? item.value : item.placeholder
            }else if(item.id.includes('verb')){
                verbs[item.id] = item.value ? item.value : item.placeholder
            }else{
                nouns[item.id] = item.value ? item.value : item.placeholder
            }

        } else{
            console.log('bob') // error catchcer
        }
    });

    let newMadLibArray = madLibArray.map((item, i)=>{
        if(item.includes('adjective')){
            let idString = 'adjective' + String(adjCount)
            item = document.getElementById(idString).value
            adjCount++
        } else if(item.includes('verb')){
            let idString = 'verb' + String(verbCount)
            item = document.getElementById(idString).value
            verbCount++
        } else if(item.includes('noun')){
            let nounKeyArray = Object.keys(nouns)
            item = document.getElementById(nounKeyArray[nounCount]).value
            nounCount++
        }else{
            console.log('nope');
        }
        return item;
    })
    
    document.getElementById("madLibDisplay").innerHTML = newMadLibArray.join(" ");
};