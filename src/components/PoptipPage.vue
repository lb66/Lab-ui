<template>
<div>
  <h1>Poptip 气泡提示</h1>
  <Card :component="Poptip1" explain="未完成" />
</div>
</template>

<script lang="ts">
import Card from "./Demo.vue";
import Poptip1 from "./Poptip-1.vue";
export default {
  components: {
    Card,
  },
  setup() {
    return {
      Poptip1,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
