<demo>
基础用法
</demo>

<template>
<Switch v-model:value="bool1" theme="a" />
<Switch v-model:value="bool2" theme="b" />
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import {
  ref
} from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool1 = ref(true); //控制初始开关状态
    const bool2 = ref(false);
    return {
      bool1,
      bool2,
    };
  },
};
</script>
