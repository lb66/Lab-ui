<demo>
基础用法
</demo>

<template>
  <Input placeholder="请输入内容" v-model:value="text" />
  输入内容：{{text}}
</template>

<script lang="ts">
import Input from "../lib/input.vue";
import { ref } from "vue";
export default {
  components: {
    Input,
  },
  setup() {
    const text = ref("");
    return {
      text,
    };
  },
};
</script>
