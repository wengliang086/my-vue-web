<template>
    <div>
        <div>
            <input v-model="inputValue" />
            <!-- <button v-on:click="handleSubmit">提交1</button> -->
            <button @click="handleSubmit">提交</button>
        </div>
        <ul>
            <t-item v-for="(item, index) of list" :content="item" v-bind:key="index"/>
        </ul>
        <select>
          <option v-for="option in list" v-bind:key="option">
            {{option}}
          </option>
        </select>
    </div>
</template>

<script>
import TodoItem from "./components/TodoItem";
export default {
  components: {
    "t-item": TodoItem
  },
  data: function() {
    return {
      inputValue: "",
      list: []
    };
  },
  methods: {
    handleSubmit: function() {
      //   this.$data.list
      this.list.push(this.inputValue);
      this.inputValue = "";
    }
  }
};
</script>

<style>
</style>
