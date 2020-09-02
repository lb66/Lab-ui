<template>
  <h1>Input 输入框</h1>
  <Input placeholder="请输入内容" />
  <Input value="Disabled" disabled />
  <Input placeholder="请输入内容" icon="search" />
  <Input :value="text1" @input="text1 = $event.target.value" />
  :{{text1}}
  <Input placeholder="请输入内容" clearable v-model:value="text2" @input="text2=$event.target.value" />
</template>

<script lang="ts">
import Input from "../lib/input.vue";
import { ref } from "vue";
export default {
  components: {
    Input,
  },
  setup() {
    const text1 = ref("Hello");
    const text2 = ref("清空内容");
    return {
      text1,
      text2,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
