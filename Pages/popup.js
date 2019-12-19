'use strict';
function getimage() {
    chrome.tabs.create({
       url:"./Pages/option.html",
       selected:true  // We open the tab in the background
})
}

document.addEventListener('DOMContentLoaded', function () {
    var btns = document.querySelectorAll('button');
    for (var i = 0; i < btns.length; i++) {
        let btn = btns[i];
        if (btn.id == "option") {
            btn.addEventListener('click', getimage);
        }
    }
});

