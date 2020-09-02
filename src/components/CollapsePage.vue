<template>
  <h1>Grid 栅格</h1>
  <Collapse>
    <CollapseItem>1</CollapseItem>
    <CollapseItem>2</CollapseItem>
    <CollapseItem>3</CollapseItem>
  </Collapse>
</template>

<script>
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
