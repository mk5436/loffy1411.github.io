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

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
                document.getElementById("chips").innerHTML=allText;
                output.innerText = reader.result;
            }
        }
    };
    rawFile.send(null);
}

readTextFile("./filteredWords.txt");

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