//var word_list=['수학'];
//function isWord(word_list, letter){
//	for(var i in word_list){
//		if(letter.indexOf(i) != -1)
//			return true;
//	}
//	return false;
//}

chrome.browserAction.onClicked.addListener(
	function aa(tab) {
        chrome.tabs.executeScript(tab.id, {
        file: 'inject.js'
    });
});

