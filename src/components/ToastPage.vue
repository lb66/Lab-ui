<template>
<div>
  <h1>Toast 消息提示</h1>
  <Button @click="open1">可自动关闭</Button>
  <Toast v-model:visible="isVisible1" autoClose :closeTime="1">这是一条会自动关闭的消息</Toast>
  <br />
  <br />
  <Button @click="open2">自动关闭shang</Button>
  <Toast v-model:visible="isVisible2" autoClose icon="Close">屏幕上方弹出的消息</Toast>
  <br />
  <br />
  <Button @click="open3">不自动关闭zhong</Button>
  <Toast v-model:visible="isVisible3" position="center" icon="OK" :onClick="f1">屏幕中间弹出的消息，多行文字示例点击关闭。</Toast>
  <br />
  <br />
  <Button @click="open4">不自动关闭xia</Button>
  <Toast v-model:visible="isVisible4" position="bottom" icon="Close" :onClick="f2">屏幕下方弹出的消息</Toast>
</div>
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
  setup(props, context) {
    const isVisible1 = ref(false);
    const open1 = () => {
      isVisible1.value = true;
    };
    const isVisible2 = ref(false);
    const open2 = () => {
      isVisible2.value = true;
    };
    const isVisible3 = ref(false);
    const open3 = () => {
      isVisible3.value = true;
    };
    const isVisible4 = ref(false);
    const open4 = () => {
      isVisible4.value = true;
    };
    const f1 = () => {
      console.log("ok");
    };
    const f2 = () => {
      console.log("close");
    };

    return {
      f1,
      f2,
      isVisible1,
      open1,
      isVisible2,
      open2,
      isVisible3,
      open3,
      isVisible4,
      open4,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
