<template>
<div>
  <h1>Toast 消息提示</h1>
  <Card :component="Toast1" explain="最基本的消息提示，默认2秒后自动关闭。<br/>可设置自动关闭时间" />
  <Card :component="Toast2" explain="status 属性设置不同的提示状态：成功、警告、错误。<br/>position 属性设置不同的消息弹出位置。" />
  <Card :component="Toast3" explain="指定 closable 为 true 后可以手动关闭消息提示<br/>点击关闭可以触发点击事件" />
</div>
</template>

<script lang="ts">
import Card from "./Demo.vue";
import Toast1 from "./Toast-1.vue";
import Toast2 from "./Toast-2.vue";
import Toast3 from "./Toast-3.vue";
export default {
  components: {
    Card,
  },
  setup() {
    return {
      Toast1,
      Toast2,
      Toast3,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
