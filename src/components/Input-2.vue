<demo>
禁用状态
</demo>

<template>
  <Input placeholder="请输入内容" disabled v-model:value="text" />
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
