import Vue from 'vue'
// import App from './App.vue'
import tl from './TodoList.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(tl)
}).$mount('#app')

// new Vue({
//   el: '#app',
//   comments: {App},
//   template: '<App/>'
// })
