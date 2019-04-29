import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store'

// Buefy
import Buefy from 'buefy'
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

