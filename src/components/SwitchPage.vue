<template>
  <div>
    <h1>Switch</h1>
    <Switch v-model:value="value" />
  </div>
</template>

<script>
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: { Switch },
  setup() {
    const value = ref(false);
    return { value };
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