<template>
<button @click="openToast">click</button>
<Toast v-model:visible="isVisible" autoClose :closeTime="1">hahaha</Toast>
<br />
<button @click="openToast2">click2</button>
<Toast v-model:visible="isVisible2">傻到家啦收到结束啦肯定就拉倒奥斯卡的几率</Toast>
</template>

<script lang="ts">
import Toast from "../lib/Toast.vue";
import {
  ref
} from "vue";

export default {
  components: {
    Toast,
  },
  setup(props, context) {
    const isVisible = ref(false);
    const openToast = () => {
      isVisible.value = true;
    };
    const isVisible2 = ref(false);
    const openToast2 = () => {
      isVisible2.value = true;
    };
    return {
      isVisible,
      openToast,
      isVisible2,
      openToast2,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
