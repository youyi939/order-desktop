import Vue from 'vue'
import OrderFind from "@/components/OrderFind";

Vue.config.productionTip = false

new Vue({
  render: h => h(OrderFind),
}).$mount('#app')
