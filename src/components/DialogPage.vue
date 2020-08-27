<template>
  <h1>Dialog 对话框</h1>
  <h2>---</h2>
  <Button @click="open">打开对话框</Button>
  <Dialog :visible="isVisible"></Dialog>
</template>

<script lang='ts'>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const isVisible = ref(false);
    const open = () => {
      isVisible.value = true;
    };
    return { isVisible, open };
  },
};
</script>

<style lang="scss" scoped>
</style>