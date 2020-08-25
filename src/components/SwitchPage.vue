<template>
  <div>
    <h1>Switch开关</h1>
    <Switch v-model:value="value1" />
    <h2>---</h2>
    <Switch v-model:value="value2" theme="b" />
  </div>
</template>

<script>
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: { Switch },
  setup() {
    const value1 = ref(false);
    const value2 = ref(false);
    return { value1, value2 };
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