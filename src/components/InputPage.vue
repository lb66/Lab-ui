<template>
  <Input placeholder="请输入内容" />

  <Input value="Disabled" disabled />
  <Input placeholder="请输入内容" icon="search" />
  <Input :value="xxx" @input="xxx = $event.target.value" />
  {{xxx}}
</template>

<script lang='ts'>
import Input from "../lib/input.vue";
import { ref } from "vue";
export default {
  components: { Input },
  setup() {
    const xxx = ref("Hello");
    return { xxx };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 10px 0;
}
</style>