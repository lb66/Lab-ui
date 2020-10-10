<demo>
尺寸
</demo>

<template>
<Switch v-model:value="bool" size="small" />
<Switch v-model:value="bool" />
<Switch v-model:value="bool" size="large" />
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
    const bool = ref(true);
    return {
      bool,
    };
  },
};
</script>

<style lang="scss" scoped>
:nth-child(n) {
  margin-right: 14px;
}
</style>
