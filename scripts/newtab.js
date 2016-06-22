chrome.topSites.get(function(sites){
  new Vue({
    el: '#app',
    data: {
      sites: sites
    }
  });
});
