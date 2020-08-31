<template>
  <div class="ui-col" :class="colClass" :style="colStyle">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, inject, Ref } from "vue";
export default {
  props: {
    span: [Number, String],
    offset: [Number, String],
    // gutter: [Number, String],
  },
  setup(props, context) {
    const { span, offset } = props;
    const gutter = inject<Ref<number>>("gutter");
    const colClass = computed(() => {
      return {
        [`ui-col-${span}`]: span,
        [`ui-offset-${offset}`]: offset,
      };
    });
    const colStyle = computed(() => {
      if (offset) {
        return {
          marginLeft: ((+offset / 24) * 100) % +(+gutter / 2 + "px"),
          marginRight: +gutter / 2 + "px",
        };
      } else {
        return {
          marginLeft: +gutter / 2 + "px",
          marginRight: +gutter / 2 + "px",
        };
      }
    });
    return {
      colStyle,
      colClass,
    };
  },
};
</script>

<style lang="scss">
.ui-col {
  border: 1px solid #9c9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  @for $n from 1 through 24 {
    &.#{"ui-col-"}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  @for $n from 1 through 24 {
    &.#{"ui-offset-"}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
