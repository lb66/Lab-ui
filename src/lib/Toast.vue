<template>
<Teleport to="body" v-if="visible">
  <div class="ui-toast" :class="positionClass">
    <div class="ui-toast-content">
      <slot />
    </div>
    <svg v-if="!autoClose" class="ui-icon ui-toast-close" @click="closeToast" aria-hidden="true">
      <use xlink:href="#icon-blueClose" />
    </svg>
  </div>
</Teleport>
</template>

<script lang="ts">
import {
  watch,
  ref,
  computed
} from "vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    autoClose: {
      type: Boolean,
      default: false,
    },
    closeTime: {
      type: Number,
      default: 2,
    },
    position: {
      type: String,
      default: "top",
    },
  },
  setup(props, context) {
    const {
      closeTime,
      position
    } = props;
    watch(
      () => props.visible,
      () => {
        if (props.autoClose && props.visible) {
          setTimeout(() => {
            context.emit("update:visible", false);
          }, closeTime * 1000);
        }
      }
    );
    const closeToast = () => {
      context.emit("update:visible", false);
    };
    const positionClass = computed(() => {
      return {
        [`position-${position}`]: position,
      };
    });
    return {
      closeToast,
      positionClass,
    };
  },
};
</script>

<style lang="scss">
.ui-toast {
  min-height: 40px;
  line-height: 1.4;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  color: white;
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 8px 16px;

  &.position-top {
    top: 3%;
  }

  &.position-bottom {
    bottom: 3%;
  }

  &.position-center {
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &-content {
    max-width: 200px;
    overflow: hidden;
    word-wrap: break-word;
    word-break: normal;
  }

  &-close {
    padding-left: 16px;
    width: 2em;
    height: 2em;
  }
}
</style>
