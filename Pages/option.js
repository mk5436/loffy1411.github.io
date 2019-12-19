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

function saveToFile_Chrome(fileName, content) {
    var blob = new Blob([content], { type: 'text/plain' });
 
    objURL = window.URL.createObjectURL(blob);
            
    // 이전에 생성된 메모리 해제
    if (window.__Xr_objURL_forCreatingFile__) {
        window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
    }
    window.__Xr_objURL_forCreatingFile__ = objURL;
 
    var a = document.createElement('a');
 
    a.download = fileName;
    a.href = objURL;
    a.click();
}

function readTextFile(file__) {
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


function wrietFile(msg){
    if(name=="") return false;
    var fullpath="./filterword.txt";
    var fileObject=new ActiveXObject("Scripting.FileSystemObject");
    if(!fileObject.FileExists(fullpath)){
        var fWrite=fileObject.CreateTextFile(fullpath,false);
        fWrite.write(msg);
        fWrite.close();
    }else{
        var fWrite=fileObject.OpenTextFile(fullpath,8);
        fWrite.write(msg);
        fWrite.close();
    }
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
        else if (btn.id == "chips") {
            btn.addEventListener('click', deleteKeyword(btn));
        }
    }
});