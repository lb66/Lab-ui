<template>
  <div class="ui-row" :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">
    <slot />
  </div>
</template>

<script lang='ts'>
import { onMounted } from "vue";
export default {
  props: {
    gutter: [Number, String],
  },
  setup() {
    onMounted(() => {
      console.log("row mounted");
      console.log(this);
      // console.log(this.$children);
      // this.$children.forEach((vm) => {
      //   vm.gutter = this.gutter;
      // });
    });
  },
};
</script>

<style lang="scss">
.ui-row {
  display: flex;
}
</style>