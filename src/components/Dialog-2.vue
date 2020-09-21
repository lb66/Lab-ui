<demo>
禁用关闭
</demo>

<template>
<Button @click="openDialog">禁用遮罩层关闭</Button>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {
  showDialog
} from "../lib/showDialog";
import {
  h
} from "vue";
export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    const openDialog = () => {
      showDialog({
        title: h("strong", {}, "自定义标题"),
        content: "Hello World",
        word1: "按钮1",
        word2: "按钮2",
        closeOverlay: false,
        confirm: () => {},
        cancel: () => {},
      });
    };
    return {
      openDialog,
    };
  },
};
</script>
