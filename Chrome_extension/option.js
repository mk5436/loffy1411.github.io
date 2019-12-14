'use strict';
function gotoGithub() {
    chrome.tabs.create({
        url: "https://github.com/mk5436/loffy1411.github.io",
        selected: true  // We open the tab in the background
    })
}

function gotoChromeStore() {
    chrome.tabs.create({
        url: "https://chrome.google.com/webstore/category/extensions?hl=ko",
        selected: true  // We open the tab in the background
    })
}

function processFile() {
    var reader = new FileReader();
    reader.readAsText("./filteredWords.txt", "euc-kr");
    reader.onload = function () {
        document.getElementById("chips").innerHTML=reader.result;
        //output.innerText = reader.result;
    };
}

function deleteKeyword(button){
    button.parentElement.style.displan='none';
}

document.addEventListener('DOMContentLoaded', function () {
    var btns = document.querySelectorAll('button');
    for (var i = 0; i < btns.length; i++) {
        let btn = btns[i];
        if (btn.id == "github") {
            btn.addEventListener('click', gotoGithub);
        }
        else if (btn.id == "chrome") {
            btn.addEventListener('click', gotoChromeStore);
        }
        else if(btn.id=="chips"){
            btn.addEventListener('click', deleteKeyword(btn));
        }
    }
});
processFile();