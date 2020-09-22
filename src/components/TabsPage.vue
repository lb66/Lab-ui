<template>
<div>
  <h1>Tabs 标签页</h1>
  <Card :component="Tabs1" explain="通过 v-model 绑定当前激活标签的 title，可自由设置初始激活哪个标签。" />
</div>
</template>

<script lang="ts">
import Card from "./Demo.vue";
import Tabs1 from "./Tabs-1.vue";
export default {
  components: {
    Card,
  },
  setup() {
    return {
      Tabs1,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
