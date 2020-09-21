<demo>
基础用法
</demo>

<template>
<Button @click="open">普通提示</Button>
<Toast v-model:visible="isVisible" autoClose :closeTime="1.5">这是一条会自动关闭的消息</Toast>
</template>

<script lang="ts">
import Toast from "../lib/Toast.vue";
import Button from "../lib/Button.vue";
import {
  ref
} from "vue";
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
    return {
      isVisible,
      open,
    };
  },
};
</script>
