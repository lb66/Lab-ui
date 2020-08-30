<template>
<div class="ui-row" :style="rowStyle">
  <slot />
</div>
</template>

<script lang="ts">
import {
  onMounted,
  computed
} from "vue";
export default {
  props: {
    gutter: [Number, String],
  },
  setup(props, context) {
    // onMounted(() => {
    //   怎么访问实例this？？
    //   this.$children.forEach((vm) => {
    //     vm.gutter = props.gutter;
    //   });
    // });
    const rowStyle = computed(() => {
      return {
        marginLeft: -props.gutter / 2 + "px",
        marginRight: -props.gutter / 2 + "px",
      };
    });
    return {
      rowStyle
    };
  },
};
</script>

<style lang="scss">
.ui-row {
  display: flex;
  // flex-wrap: wrap;
}
</style>
