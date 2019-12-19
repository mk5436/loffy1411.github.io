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

function writeLocalStorage(item){
    var data=localStorage.getItem('Data');
    data+='\n'+item;
    localStorage.Data=data;
}

function deleteKeyword(button) {
    button.parentElement.style.displan = 'none';
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
        /*
        else if (btn.id == "chips") {
            btn.addEventListener('click', deleteKeyword(btn));
        }*/
    }
});

document.addEventListener('DOMContentLoaded',function(){
    if(!localStorage.Data){
        localStorage.setItem('Data','Default');
    }
    var local_data=localStorage.getItem('Data');
    local_data=local_data.split('\n');

    var chips=document.getElementById("chips");
    alert(chips.childNodes.length);
    alert(chips.firstChild.nextSibling.childNodes.length);
    chips.firstChild.nextSibling.firstChild.nodeValue="HI";

    var tmp=document.createElement('div');
    tmp.innerHTML='<span class="chip">John Doe <div class="closebtn">&times;</div></span>';
    chips.appendChild(tmp);
});

