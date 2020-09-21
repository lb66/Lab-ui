<template>
  <div>
    <h1>Dialog 对话框</h1>
    <Card :component="Dialog1" explain="基本用法，可以自定义标题、内容和按钮文字。" />
    <Card :component="Dialog2" explain="可以禁用遮罩层关闭，在触摸外部时不会将其关闭。" />
  </div>
</template>

<script lang="ts">
import Card from "./Demo.vue";
import Dialog1 from "./Dialog-1.vue";
import Dialog2 from "./Dialog-2.vue";

export default {
  components: {
    Card,
  },
  setup() {
    return {
      Dialog1,
      Dialog2,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
