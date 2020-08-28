<template>
  <h1>Dialog 对话框</h1>
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
  <br />
  <br />

  <Button @click="openDialog">打开对话框</Button>
</template>

<script lang='ts'>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { showDialog } from "../lib/showDialog";
import { ref, h } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const isVisible = ref(false);
    const open = () => {
      isVisible.value = true;
    };
    const f1 = () => {};
    const f2 = () => {};

    const openDialog = () => {
      showDialog({
        title: h("strong", {}, "标题"),
        content: "Hello World",
        word1: "a",
        word2: "b",
        closeOverlay: false,
        confirm() {
          console.log("confirm");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { isVisible, open, f1, f2, openDialog };
  },
};
</script>

<style lang="scss" scoped>
</style>