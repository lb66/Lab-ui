<template>
<div class="ui-poptip" @click.stop="popup" v-if="trigger==='click'">
  <div class="content-wrapper" :class="positionClass" v-if="visible" @click.stop>
    <slot name="content" />
  </div>
  <div>
    <slot />
  </div>
</div>
<div class="ui-poptip" @mouseenter="open" @mouseleave="close" v-else>
  <div class="content-wrapper" :class="positionClass" v-if="visible" @click.stop>
    <slot name="content" />
  </div>
  <div>
    <slot />
  </div>
</div>
</template>

<script lang="ts">
import {
  nextTick,
  ref,
  computed
} from "vue";
export default {
  props: {
    position: {
      type: String,
      default: "top",
    },
    trigger: {
      type: String,
      default: "click",
    },
  },
  setup(props) {
    const visible = ref(false);
    const popup = () => {
      visible.value = !visible.value;
      if (visible.value === true) {
        nextTick(() => {
          const eventHandler = () => {
            visible.value = false;
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        });
      }
    };
    const open = () => {
      visible.value = true
    }
    const close = () => {
      visible.value = false
    }

    const {
      position
    } = props;
    const positionClass = computed(() => {
      return {
        [`position-${position}`]: position,
      };
    });

    return {
      popup,
      visible,
      positionClass,
      open,
      close
    };
  },
};
</script>

<style lang="scss">
.ui-poptip {
  display: inline-block;
  position: relative;
  vertical-align: top;

  &+& {
    margin-left: 10px;
  }

  >.content-wrapper {
    z-index: 99;
    position: absolute;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    background: #fff;
    white-space: nowrap;
    min-width: 120px;
    max-width: 320px;
    font-size: 14px;
    padding: 8px 16px;
    text-align: center;

    &::before,
    &::after {
      content: " ";
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      border-color: transparent;
      border-style: solid;
    }

    &.position-top {
      bottom: 125%;

      &::before {
        top: 100%;
        margin-left: -8px;
        border: 8px solid transparent;
        border-top-color: hsla(0, 0%, 85%, 0.5);
      }

      &::after {
        top: 100%;
        margin-left: -7px;
        border: 7px solid transparent;
        border-top-color: #fff;
      }
    }

    &.position-bottom {
      top: 125%;

      &::before {
        bottom: 100%;
        margin-left: -8px;
        border: 8px solid transparent;
        border-bottom-color: hsla(0, 0%, 85%, 0.5);
      }

      &::after {
        bottom: 100%;
        margin-left: -7px;
        border: 7px solid transparent;
        border-bottom-color: #fff;
      }
    }
  }
}
</style>
