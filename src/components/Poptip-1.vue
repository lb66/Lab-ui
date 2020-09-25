<demo>
基础用法
</demo>
<template>
<Poptip>
  <template v-slot:content>
    <div>气泡提示</div>
  </template>
  <Button>click 激活</Button>
</Poptip>
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
