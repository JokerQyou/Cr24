if(chrome.tabs.onMouseScroll){
  chrome.tabs.onMouseScroll.addListener(function(e){
    console.info(e);
  });
}
chrome.tabs.onCreated.addListener(function(tab){
  // Boost new tab creation (literally, but you lost top sites).
  if(tab.url === 'chrome://newtab/'){
    chrome.tabs.update(tab.id, {url: 'about:blank'});
  }
});
