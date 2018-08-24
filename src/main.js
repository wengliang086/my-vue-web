import Vue from 'vue'
import App from './App.vue'
// import tl from './TodoList.vue'
// import Vuex from "vuex";
import Users from "./components/Users"
import routers from "./routers";
import VueResource from "vue-resource";
import VueRouter from "vue-router";

Vue.config.productionTip = false

// Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

// 全局注册组件
// Vue.component("users", Users);

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

// new Vue({
//   render: h => h(tl)
// }).$mount('#app')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


// new Vue({
//   // state
//   data () {
//     return {
//       count: 0
//     }
//   },
//   // view
//   template: `
//     <div>{{ count }}</div>
//   `,
//   // actions
//   methods: {
//     increment () {
//       this.count++
//     }
//   }
// })
