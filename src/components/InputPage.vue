<template>
  <div>
    <h1>Input 输入框</h1>
    <Card :component="Input1" explain="基本用法，可以使用 v-model 实现数据的双向绑定。" />
    <Card :component="Input2" explain="通过添加disabled属性可设置为不可用状态。" />
    <Card :component="Input3" explain="通过 icon 属性可以在输入框加一个图标。" />
    <Card :component="Input4" explain="开启属性 clearable 可显示清空按钮。" />
  </div>
</template>

<script lang="ts">
import Card from "./Demo.vue";
import Input1 from "./Input-1.vue";
import Input2 from "./Input-2.vue";
import Input3 from "./Input-3.vue";
import Input4 from "./Input-4.vue";
import { ref } from "vue";
export default {
  components: {
    Card,
  },
  setup() {
    const text = ref("清空内容");
    return {
      text,
      Input1,
      Input2,
      Input3,
      Input4,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
