<template>
<Teleport to="body" v-if="visible">
  <div class="ui-toast" :class="positionClass">
    <div class="toast">
      <svg v-if="status" class="ui-icon ui-toast-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${status}`" />
      </svg>
      <div class="ui-toast-content">
        <slot />
      </div>
      <svg v-if="closable" class="ui-icon ui-toast-close" @click="onClick" aria-hidden="true">
        <use :xlink:href="`#icon-blueClose`" />
      </svg>
    </div>
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
    status: String,
    onClick: Function,
    closable: {
      type: Boolean,
      default: false,
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
    const positionClass = computed(() => {
      return {
        [`position-${position}`]: position,
      };
    });
    const closeToast = () => {
      context.emit("update:visible", false);
    };
    const onClick = () => {
      props.onClick?.();
      closeToast();
    };
    return {
      onClick,
      positionClass,
    };
  },
};
</script>

<style lang="scss">
@keyframes ui-fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes ui-slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes ui-slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

.ui-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  >.toast {
    line-height: 1.4;
    min-height: 40px;
    display: flex;
    color: white;
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    padding: 8px 16px;
  }

  &.position-top {
    top: 3%;

    .toast {
      animation: ui-slide-down 0.3s;
    }
  }

  &.position-bottom {
    bottom: 3%;

    .toast {
      animation: ui-slide-up 0.3s;
    }
  }

  &.position-center {
    top: 50%;
    transform: translate(-50%, -50%);

    .toast {
      animation: ui-fade-in 0.3s;
    }
  }

  &-content {
    max-width: 200px;
    overflow: hidden;
    word-wrap: break-word;
    word-break: normal;
  }

  &-close {
    padding-left: 16px;
    height: 2em;
    width: 2em;
    cursor: pointer;
  }

  &-icon {
    padding-right: 16px;
    height: 2em;
    width: 2em;
  }
}
</style>
