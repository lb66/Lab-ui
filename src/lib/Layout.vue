<template>
<div class="ui-layout" :class="layoutClass">
  <solt />
</div>
</template>

<script>
import {
  ref
} from "vue";
export default {
  setup() {
    const layoutClass = {
      hasSider: ref(false),
    };

    return {
      layoutClass,
    };
  },
};
</script>

<style lang="scss">
.ui-layout {
  flex-grow: 1;
}
</style>
