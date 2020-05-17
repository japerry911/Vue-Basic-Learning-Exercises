import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue';
import Servers from './Servers.vue';
import Footer from './Footer.vue';

Vue.component('vueHeader', Header);
Vue.component('servers', Servers);
Vue.component('vueFooter', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
