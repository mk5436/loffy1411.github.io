'use strict';

var local_data = localStorage.getItem('Data');

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

function addWords() {
    local_data = localStorage.getItem('Data');
    local_data = local_data.split('\n');

    var input = document.getElementById("text_input");
    local_data += ',';
    local_data += input.value;

    localStorage.setItem('Data', local_data);
    var chips = document.getElementById("chips");
    var tmp = document.createElement('div');
    tmp.innerHTML = '<span class="chip">' + input.value + '<div class="closebtn">&times;</div></span>';
    chips.appendChild(tmp);
    input.value = "";
}

function deleteKeyword(button) {
    alert("DELETE");
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
        } else if (btn.id == "text_input_btn") {
            btn.addEventListener('click', addWords);
        }
    }
    var closebtns = document.querySelectorAll('.closebtn');
    for (var i = 0; i < btns.length; i++) {
        let btn = btns[i];
        btn.addEventListener('click', deleteKeyword(btn));
    }
});

document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.Data) {
        localStorage.setItem('Data', '');
    }
    local_data = localStorage.getItem('Data');
    local_data = local_data.split(',');

    var chips = document.getElementById("chips");
    for (var i = 0; i < local_data.length; i++) {
        if (local_data[i].length == 0) continue;
        var tmp = document.createElement('div');
        tmp.innerHTML = '<span class="chip">' + local_data[i] + '<div class="closebtn">&times;</div></span>';
        chips.appendChild(tmp);
    }
    makeCookie();
});

function makeCookie() {
    chrome.cookies.set({
        url: "https://everytime.kr/",
        name: "EveryFilter",
        value: localStorage.getItem('Data'),
        domain: ".everytime.kr"
    });
    alert(document.cookie);
}