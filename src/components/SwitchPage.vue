<template>
  <div>
    <h1>Switch</h1>
    <Switch :value="y" @update:value="y=$event" />
  </div>
</template>

<script>
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: { Switch },
  setup() {
    const y = ref(false);
    return { y };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  border: 1px solid #d4d6d8;
  border-width: 0 0 1.5px 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
</style>