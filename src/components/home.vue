<template>
    <div>
      <h2>{{title}}</h2>
        <!-- <div class="home text-center">{{title}}</div>
        <header>
            <router-link id="logo" to="/home/first"></router-link>
        </header> -->
    </div>
</template>

<script>
export default {
  title: "home",
  data() {
    return {
      title: "home 页面",
      users: []
    };
  },
  components: {},
  created() {
    this.$http.get("http://jsonplaceholder.typicode.com/users")
      .then((data) => {
        // console.log(data);
        this.users = data.body;
      })
  }
};
</script>

<style>
.home {
  margin-top: 10%;
  font-size: 2.4em;
  font-weight: bold;
}
</style>

