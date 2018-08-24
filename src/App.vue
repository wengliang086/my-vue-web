<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2>{{title}}</h2>

    <ul>
      <li><a href="/">home</a></li>
      <li><a href="/header">header</a></li>
      <li><a href="/footer">footer</a></li>
    </ul>

    <ul>
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/header">header</router-link></li>
      <li><router-link to="/footer">footer</router-link></li>
      <!-- <li v-for="(item, index) in links" :key="index"><a @click="$goRute(item.route)">{{item.text}}</a></li> -->
    </ul>

    <users></users>

    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Users from "./components/Users";

export default {
  name: "app",
  data() {
    return {
      title: "App 主页面",
      links: [
        {
          text: "Home",
          router: "/home"
        },
        {
          text: "Header",
          router: "/header"
        },
        {
          text: "Footer",
          router: "/footer"
        }
      ]
    };
  },
  components: {
    "users" : Users
    // HelloWorld
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 {
  color: green;
}
</style>
