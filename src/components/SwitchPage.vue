<template>
<div>
  <h1>Switch 开关</h1>
  <Card :component="Switch1" explain="
通过 v-model 绑定开关的选中状态，true 表示开，false 表示关。
可选两种样式，theme 的值可切换 a 或 b，默认不写 theme 为 a 样式。
" />
  <Card :component="Switch2" explain="通过disabled属性来禁用开关，禁用状态下开关不可点击。" />
</div>
</template>

<script lang="ts">
import Switch1 from "./Switch-1.vue";
import Switch2 from "./Switch-2.vue";
import Card from "./Card.vue";
import {
  ref
} from "vue";
export default {
  components: {
    Card,
  },
  setup() {
    return {
      Switch1,
      Switch2,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
