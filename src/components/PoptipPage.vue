<template>
<div>
  <h1>Poptip 气泡提示</h1>
  <Poptip>
    <template v-slot:content>
      <div>气泡提示</div>
    </template>
    <Button>点击</Button>
  </Poptip>
</div>
</template>

<script lang="ts">
import Poptip from "../lib/Poptip.vue";
import Button from "../lib/Button.vue";
export default {
  components: {
    Poptip,
    Button,
  },
};
</script>

<style lang="scss" scoped>
</style>
