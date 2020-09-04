<template>
<div>
  <h1>Tabs 标签页</h1>
  <Tabs v-model:selected="title">
    <Tab title="标题一">1</Tab>
    <Tab title="标题二">2</Tab>
    <Tab title="标题三">3</Tab>
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
    const title = ref("标题一"); //用户设置默认标签
    return {
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
