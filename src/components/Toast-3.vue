<demo>
可关闭
</demo>

<template>
  <Button @click="open">可关闭的提示</Button>
  <Toast v-model:visible="isVisible" closable :onClick="f1">可手动关闭的提示</Toast>
</template>

<script lang="ts">
import Toast from "../lib/Toast.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Toast,
    Button,
  },
  setup() {
    const isVisible = ref(false);
    const open = () => {
      isVisible.value = true;
    };
    const f1 = () => {
      console.log("close");
    };

    return {
      isVisible,
      open,
      f1,
    };
  },
};
</script>
