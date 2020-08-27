<template>
  <h1>Dialog 对话框</h1>
  <Button @click="open">打开对话框</Button>
  <Dialog v-model:visible="isVisible" :closeOverlay="false" :confirm="f1" :cancel="f2"></Dialog>
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
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return { isVisible, open, f1, f2 };
  },
};
</script>

<style lang="scss" scoped>
</style>