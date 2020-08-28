<template>
  <div
    class="ui-col"
    :class="[`ui-col-${span}`,`ui-offset-${offset}`]"
    :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}"
  >
    <slot />
  </div>
</template>

<script lang='ts'>
export default {
  props: {
    span: [Number, String],
    offset: [Number, String],
    gutter: { type: [Number, String], default: 16 },
  },
  setup() {
    const gutter = 16;
    return { gutter };
  },
};
</script>

<style lang="scss">
.ui-col {
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid red;
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