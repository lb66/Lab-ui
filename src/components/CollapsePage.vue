<template>
<div>
  <h1>Collapse 折叠面板</h1>
  <Collapse>
    <CollapseItem title="自定义标题">1</CollapseItem>
    <CollapseItem>2</CollapseItem>
    <CollapseItem>3</CollapseItem>
  </Collapse>
</div>
</template>

<script lang="ts">
import Collapse from "../lib/Collapse.vue";
import CollapseItem from "../lib/CollapseItem.vue";
export default {
  components: {
    CollapseItem,
    Collapse,
  },
};
</script>

<style lang="scss" scoped>
</style>
