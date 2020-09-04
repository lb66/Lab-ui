<template>
<div>
  <h1>Tabs 标签页</h1>
  <Tabs v-model:selected="title">
    <Tab title="标题1">1</Tab>
    <Tab title="标题2">2</Tab>
  </Tabs>
</div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import {
  ref
} from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const title = ref("");
    return {
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
