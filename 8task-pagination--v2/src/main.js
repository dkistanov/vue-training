import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

import AppPagination from './components/pagination.vue'

Vue.component('AppPagination', AppPagination);
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
