<template>
  <div>
    <h1>Switch 开关</h1>
    <Switch v-model:value="switch1" />
    <br />
    <br />
    <Switch v-model:value="switch2" theme="b" />
  </div>
</template>

<script>
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const switch1 = ref(false); //开关初始状态
    const switch2 = ref(true);
    return {
      switch1,
      switch2,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
