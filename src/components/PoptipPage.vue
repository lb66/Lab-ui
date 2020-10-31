<template>
<div>
  <h1>Poptip 气泡提示</h1>
  <Card :component="Poptip1" explain="Poptip支持两种触发方式：悬停和点击。默认为点击。" />
  <Card :component="Poptip2" explain="组件提供了上下两个方向来显示Poptip，默认为上方显示。" />
</div>
</template>

<script lang="ts">
import Card from "./Demo.vue";
import Poptip1 from "./Poptip-1.vue";
import Poptip2 from "./Poptip-2.vue";
export default {
  components: {
    Card,
  },
  setup() {
    return {
      Poptip1,
      Poptip2
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
