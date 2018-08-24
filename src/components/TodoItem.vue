<template>
    <li class="item" @click="handleDelete">{{content}}-{{index}}</li>
</template>

<script>
export default {
  props: ["content", "index"],
  methods: {
    handleDelete() {
      // alert(this.index);
      //触发父主键的delete event事件，并把index传过去
      this.$emit("delete", this.index);
    }
  }
};
</script>

<style scoped>
.item {
  color: green;
}
</style>

