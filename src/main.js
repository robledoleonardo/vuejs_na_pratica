import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import Storage from 'vue-web-storage'

Vue.use(Storage)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
