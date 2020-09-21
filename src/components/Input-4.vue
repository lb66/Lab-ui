<demo>
可清空
</demo>

<template>
  <Input placeholder="请输入内容" clearable v-model:value="text" @input="text=$event.target.value" />
</template>

<script lang="ts">
import Input from "../lib/input.vue";
import { ref } from "vue";
export default {
  components: {
    Input,
  },
  setup() {
    const text = ref("清空内容");
    return {
      text,
    };
  },
};
</script>
