<demo>
显示位置
</demo>
<template>
<Poptip position="top">
  <template v-slot:content>
    <div>上方气泡提示</div>
  </template>
  <Button>上方显示</Button>
</Poptip>

<Poptip position="bottom">
  <template v-slot:content>
    <div>下方气泡提示</div>
  </template>
  <Button>下方显示</Button>
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
