<template>
    <div>
        <div>
            <input class="item" v-model="inputValue" />
            <!-- <button v-on:click="handleSubmit">提交1</button> -->
            <button @click="handleSubmit">提交</button>
        </div>
        <ul>
            <!-- 遍历list，绑定属性值，监听子组件的delete事件 -->
            <t-item v-for="(item, index) of list" 
              :content="item" 
              :key="index" 
              :index="index"
              @delete="handleDelete"
              >
            </t-item>
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
    // 自定义标签
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
    },
    handleDelete(index) {
      this.list.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
