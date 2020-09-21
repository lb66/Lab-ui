<demo>
基础用法
</demo>

<template>
  <Button @click="open">打开对话框</Button>
  <Dialog v-model:visible="isVisible" :confirm="f1" :cancel="f2">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <p>内容1</p>
      <p>内容2</p>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    const isVisible = ref(false);
    const open = () => {
      isVisible.value = true;
    };
    const f1 = () => {};
    const f2 = () => {};
    return {
      isVisible,
      open,
      f1,
      f2,
    };
  },
};
</script>
