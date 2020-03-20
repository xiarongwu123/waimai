import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
