<demo>
基础用法
</demo>

<template>
  <Collapse>
    <CollapseItem title="自定义标题">1</CollapseItem>
    <CollapseItem>2</CollapseItem>
    <CollapseItem>3</CollapseItem>
  </Collapse>
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
