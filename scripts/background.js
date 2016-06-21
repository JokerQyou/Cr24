if(chrome.tabs.onMouseScroll){
  chrome.tabs.onMouseScroll.addListener(function(e){
    console.info(e);
  });
}
chrome.tabs.onCreated.addListener(function(e){
  // Boost new tab creation (literally, but you lost top sites).
  console.info(e);
  chrome.tabs.update(e.id, {url: 'about:blank'});
});
