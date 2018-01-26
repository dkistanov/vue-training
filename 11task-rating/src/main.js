// импортируем vue и файл App.vue

import Vue from 'vue'
import App from './App.vue'

new Vue({
  // элемент с которым будет работа vue
  el: '#app',
  render: h => h(App)
})
