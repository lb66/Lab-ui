<demo>
带图标的输入框
</demo>

<template>
<Input placeholder="请输入内容" icon="search" v-model:value="text" @input="text=$event.target.value" :onClick="f1" />
</template>

<script lang="ts">
import Input from "../lib/input.vue";
import {
  ref
} from "vue";
export default {
  components: {
    Input,
  },
  setup() {
    const text = ref("");
    const f1 = () => {
      console.log("开始查找");
    };
    return {
      text,
      f1,
    };
  },
};
</script>
