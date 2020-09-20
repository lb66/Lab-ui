<demo>
基础用法
</demo>
<template>
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false); //控制初始开关状态
    return {
      bool,
    };
  },
};
</script>
