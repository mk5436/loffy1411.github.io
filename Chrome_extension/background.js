chrome.tabs.executeScript(null, {
  file : './popup.js'
  }, function() {
  window.close();
  });