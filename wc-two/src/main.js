import Vue from 'vue'
import App from './components/Results.vue'

Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App),
}).$mount('#app')
