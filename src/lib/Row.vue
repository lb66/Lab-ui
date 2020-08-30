<template>
<div class="ui-row" :style="rowStyle" :class="rowClass">
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
    justify: String,
  },
  setup(props, context) {
    const {
      gutter,
      justify
    } = props;
    // onMounted(() => {
    //   怎么访问实例this？？
    //   this.$children.forEach((vm) => {
    //     vm.gutter = gutter;
    //   });
    // });
    const rowStyle = computed(() => {
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px",
      };
    });
    const rowClass = computed(() => {
      return {
        [`justify-${justify}`]: justify,
      };
    });
    return {
      rowStyle,
      rowClass,
    };
  },
};
</script>

<style lang="scss">
.ui-row {
  display: flex;

  // flex-wrap: wrap;
  &.justify-start {
    justify-content: flex-start;
  }

  &.justify-end {
    justify-content: flex-end;
  }

  &.justify-center {
    justify-content: center;
  }

  &.justify-around {
    justify-content: space-around;
  }

  &.justify-between {
    justify-content: space-between;
  }
}
</style>
