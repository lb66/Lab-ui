<template>
<div>
  <h1>Switch 开关</h1>
  <Card :component="Switch1" explain="
通过 v-model 绑定开关的选中状态，true 表示开，false 表示关。<br/>
可选两种样式 a 和 b，不设置为默认 a 样式。
" />
  <Card :component="Switch2" explain="通过disabled属性来禁用开关，禁用状态下开关不可点击。" />
  <Card :component="Switch3" explain="设置size为 large 或 small 使用大号和小号的开关。" />
</div>
</template>

<script lang="ts">
import Switch1 from "./Switch-1.vue";
import Switch2 from "./Switch-2.vue";
import Switch3 from "./Switch-3.vue";
import Card from "./Demo.vue";
export default {
  components: {
    Card,
  },
  setup() {
    return {
      Switch1,
      Switch2,
      Switch3,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
