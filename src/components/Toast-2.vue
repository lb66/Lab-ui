<demo>
提示类型和位置
</demo>

<template>
<Button level="success" @click="open1">成功提示</Button>
<Toast v-model:visible="isVisible1" autoClose status="success">屏幕上方弹出成功提示</Toast>

<Button level="warning" @click="open2">警告提示</Button>
<Toast v-model:visible="isVisible2" autoClose position="center" status="warning">屏幕中间弹出的警告提示</Toast>

<Button level="error" @click="open3">危险提示</Button>
<Toast v-model:visible="isVisible3" autoClose position="bottom" status="danger">屏幕下方弹出的危险提示</Toast>
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
    const isVisible1 = ref(false);
    const isVisible2 = ref(false);
    const isVisible3 = ref(false);
    const open1 = () => {
      isVisible1.value = true;
    };
    const open2 = () => {
      isVisible2.value = true;
    };
    const open3 = () => {
      isVisible3.value = true;
    };
    return {
      isVisible1,
      open1,
      isVisible2,
      open2,
      isVisible3,
      open3,
    };
  },
};
</script>
