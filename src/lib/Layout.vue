<template>
<div class="ui-layout" :class="hasSider">
  <solt />
</div>
</template>

<script>
import {
  ref
} from "vue";
export default {
  setup() {
    const hasSider = ref(false);
    return {
      hasSider
    };
  },
};
</script>

<style lang="scss">
.ui-layout {
  flex-grow: 1;
}
</style>
