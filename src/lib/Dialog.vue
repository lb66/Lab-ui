<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="ui-dialog-overlay" @click="clickOverlay"></div>
      <div class="ui-dialog-wrapper">
        <div class="ui-dialog" :class="class1">
          <header>
            <slot name="title" />
            <span class="ui-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button @click="cancel">{{word1}}</Button>
            <Button @click="confirm" theme="primary">{{word2}}</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { computed, ref } from "vue";
export default {
  components: {
    Button,
  },
  props: {
    visible: Boolean,
    closeOverlay: {
      type: Boolean,
      default: true,
    },
    confirm: Function,
    cancel: Function,
    word1: {
      type: String,
      default: "取消",
    },
    word2: {
      type: String,
      default: "确定",
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const class1 = ref();
    const clickOverlay = () => {
      if (props.closeOverlay) {
        close();
      } else {
        class1.value = "ui-dialog-zoom";
        setTimeout(() => {
          class1.value = null;
        }, 100);
      }
    };
    const confirm = () => {
      props.confirm?.();
      close();
    };
    const cancel = () => {
      props.cancel?.();
      close();
    };
    return {
      close,
      clickOverlay,
      class1,
      cancel,
      confirm,
    };
  },
};
</script>

<style lang="scss">
.ui-dialog {
  &-zoom {
    animation: 0.1s ui-zoom;
  }

  @keyframes ui-zoom {
    0% {
    }

    50% {
      transform: scale(1.05);
    }

    100% {
    }
  }

  background: white;
  border-radius: 4px;
  box-shadow: 0 0 3px fade-out(#000, 0.5);
  border-color: #d9d9d9;
  min-width: 18em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 16px;
  }

  > footer {
    border-top: 1px solid #d9d9d9;
    padding: 12px 16px;
    text-align: right;

    > Button {
      margin-left: 10px;
    }
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
