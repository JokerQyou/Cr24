Vue.use(VueAsyncData);
Vue.component('top-sites', {
  template: multiline(function(){/*@preserve
    <ol class="top-sites">
      <li v-for="site in sites" transition="expand">
        <a href="{{ site.url }}">
          <img class="favicon" v-bind:src="'chrome://favicon/' + site.url">
          <span>{{ site.title }}</span>
        </a>
      </li>
    </ol>
  */}),
  data: function(){
    return {
      sites: ['Loading...']
    };
  },
  asyncData: function(resolve, reject){
    chrome.topSites.get(function(sites){
      resolve({
        sites: sites
      });
    });
  }
});

new Vue({
  el: 'body'
});
