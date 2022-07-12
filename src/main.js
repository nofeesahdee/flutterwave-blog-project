import Vue from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './router'
import Flutterwave from 'flutterwave-vue-v3'

Vue.config.productionTip = false

Vue.use(Flutterwave, { publicKey: 'FLWPUBK-6d8b6da5d1b82f3e917119b68c001319-X' } )

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
