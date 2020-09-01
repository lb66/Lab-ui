<template>
<Button @click="open1">可自动关闭</Button>
<Toast v-model:visible="isVisible1" autoClose :closeTime="1">xxxxxxxxxx</Toast>
<br />
<br />
<Button @click="open2">不自动关闭shang</Button>
<Toast v-model:visible="isVisible2">xxxxccccccccccccccccccccccccxxxxxx</Toast>
<br />
<br />
<Button @click="open3">不自动关闭zhong</Button>
<Toast v-model:visible="isVisible3" position="center">xxxxxxxxxx</Toast>
<br />
<br />
<Button @click="open4">不自动关闭xia</Button>
<Toast v-model:visible="isVisible4" position="bottom">xsad卡深咖啡ad复活卡首付款xxxxxxxxx</Toast>
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

    return {
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
