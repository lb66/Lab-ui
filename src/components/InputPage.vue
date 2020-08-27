<template>
  <h1>Input 输入框</h1>
  <Input placeholder="请输入内容" />
  <Input value="Disabled" disabled />
  <Input placeholder="请输入内容" icon="search" />
  <Input :value="text" @input="text = $event.target.value" />
  :{{text}}
  <Input placeholder="请输入内容" clearable />未完成
</template>

<script lang='ts'>
import Input from "../lib/input.vue";
import { ref } from "vue";
export default {
  components: { Input },
  setup() {
    const text = ref("Hello");
    return { text };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 10px 0;
}
</style>