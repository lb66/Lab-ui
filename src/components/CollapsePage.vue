<template>
<div>
  <h1>Collapse 折叠面板</h1>
  <Card :component="Collapse1" explain="设置 title 自定义标题" />
</div>
</template>

<script lang="ts">
import Card from "./Demo.vue";
import Collapse1 from "./Collapse-1.vue";
export default {
  components: {
    Card,
  },
  setup() {
    return {
      Collapse1,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
