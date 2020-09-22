<template>
<div class="ui-poptip" @click.stop="popup">
  <div class="content-wrapper" v-if="visible" @click.stop>
    <slot name="content" />
  </div>
  <slot />
</div>
</template>

<script lang="ts">
import {
  ref
} from "vue";
export default {
  setup() {
    const visible = ref(false);
    const popup = () => {
      visible.value = !visible.value;
      if (visible.value === true) {
        setTimeout(() => {
          const eventHandler = () => {
            visible.value = false;
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        }, 0);
      }
    };
    return {
      popup,
      visible,
    };
  },
};
</script>

<style lang="scss">
.ui-poptip {
  display: inline-block;
  position: relative;
  vertical-align: top;

  >.content-wrapper {
    position: absolute;
    bottom: 100%;
    // left: 0;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    background: #fff;
    white-space: nowrap;
    min-width: 150px;
    font-size: 14px;
    display: block;
    padding: 8px 16px;
    text-align: center;
  }
}
</style>
