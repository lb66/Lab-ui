<template>
<div>
  <h1>Grid 栅格</h1>
  <Card :component="Grid1" explain="Grid 组件采用了24栅格系统，通过在 Col 上添加 span 属性设置列所占的宽度百分比。<br/>
此外，添加 offset 属性可以设置列的偏移宽度，计算方式与 span 相同。" />
  <Card :component="Grid2" explain="通过 gutter 属性可以设置列元素之间的间距，默认间距为 0 px" />
  <Card :component="Grid3" explain="通过 gutter 属性可以设置列元素之间的间距，默认间距为 0 px" />
</div>
</template>

<script lang="ts">
import Card from "./Demo.vue";
import Grid1 from "./Grid-1.vue";
import Grid2 from "./Grid-2.vue";
import Grid3 from "./Grid-3.vue";
export default {
  components: {
    Card,
  },
  setup() {
    return {
      Grid1,
      Grid2,
      Grid3,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
