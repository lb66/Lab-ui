<template>
  <div>
    <h1>Dialog 对话框</h1>
    <Card :component="Dialog1" explain="基本用法，可以自定义标题、内容和按钮文字。" />
    <Card :component="Dialog2" explain="使用closeOverlay选择是否禁用遮罩层关闭，即在触摸对话框外部时不会关闭它。" />
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
