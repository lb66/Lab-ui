<demo>
基础用法
</demo>

<template>
<Tabs v-model:selected="title">
  <Tab title="标签一">标签一的内容</Tab>
  <Tab title="标签二">标签二的内容</Tab>
  <Tab title="标签三">标签三的内容</Tab>
</Tabs>
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
    const title = ref("标签一"); //选择默认标签
    return {
      title,
    };
  },
};
</script>
