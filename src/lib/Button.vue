<template>
<button class="ui-button" :class="classes" @click="toggle">
  <span v-if="loading" class="loadingSymbol"></span>
  <svg v-if="icon" class="ui-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
  <slot />
</button>
</template>

<script lang="ts">
import {
  computed,
  ref
} from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "default",
    },
    size: String,
    level: String,
    loading: {
      type: Boolean,
      default: false,
    },
    icon: String,
    shape: String,
  },
  setup(props, context) {
    const {
      theme,
      size,
      level,
      shape
    } = props;
    const classes = computed(() => {
      return {
        [`theme-${theme}`]: theme,
        [`size-${size}`]: size,
        [`level-${level}`]: level,
        [`shape-${shape}`]: shape,
      };
    });
    const toggle = () => {
      context.emit("update:loading", true);
    };
    return {
      classes,
      toggle,
    };
  },
};
</script>

<style lang="scss">
.ui-button {
  // 移动端禁用长按选中文本功能
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  >.ui-icon {
    width: 1.5em;
    height: 1.5em;
  }

  cursor: pointer;
  outline: none;
  height: 36px;
  padding: 0 16px;
  font-size: 0.875em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  white-space: nowrap;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  color: inherit;
  background: white;

  &.theme-default {
    &:hover {
      color: #2d8cf0;
      border-color: #2d8cf0;
    }

    &:active {
      color: darken(#2d8cf0, 10%);
      border-color: darken(#2d8cf0, 10%);
      background: darken(white, 1%);
    }

    &[disabled] {
      cursor: not-allowed;
      color: #a0a0a0;
      border-color: #f5f5f5;

      >.ui-icon {
        fill: currentColor !important;
        color: grey;
      }
    }

    &.shape-circle2 {
      border-radius: 20px;
      height: 40px;
      width: 40px;
      padding: 0;

      &:hover {
        background: darken(white, 3%);
        border-color: #d9d9d9;
      }

      &:active {
        background: darken(white, 6%);
        border-color: #d9d9d9;
      }
    }

    &.shape-circle1 {
      border-radius: 20px;
      height: 40px;
      width: 40px;
      padding: 0;
      border-color: transparent;

      &:hover {
        background: darken(white, 3%);
      }

      &:active {
        background: darken(white, 6%);
      }
    }

    &.level-success {
      color: white;
      background: #19be6b;
      border-color: transparent;

      &:hover {
        background: lighten(#19be6b, 5%);
      }

      &:active {
        background: darken(#19be6b, 5%);
      }
    }

    &.level-error {
      color: white;
      background: #ff5252;
      border-color: transparent;

      &:hover {
        background: lighten(#ff5252, 5%);
      }

      &:active {
        background: darken(#ff5252, 5%);
      }
    }

    &.level-warning {
      color: white;
      background: #ff9900;
      border-color: transparent;

      &:hover {
        background: lighten(#ff9900, 5%);
      }

      &:active {
        background: darken(#ff9900, 5%);
      }
    }
  }

  &.theme-primary {
    color: white;
    background: #2d8cf0;
    border-color: #2b85e4;

    &:hover {
      background: lighten(#2d8cf0, 5%);
    }

    &:active {
      background: darken(#2d8cf0, 5%);
    }

    >.loadingSymbol {
      border-color: white white white transparent;
    }
  }

  &.theme-text {
    border-color: transparent;

    &:hover {
      color: #2d8cf0;
      background: darken(white, 5%);
    }

    &:active {
      color: darken(#2d8cf0, 10%);
    }

    &.level-success {
      color: #19be6b;

      &:hover {
        color: lighten(#19be6b, 5%);
      }

      &:active {
        color: darken(#19be6b, 5%);
      }
    }

    &.level-error {
      color: #ff5252;

      &:hover {
        color: lighten(#ff5252, 5%);
      }

      &:active {
        color: darken(#ff5252, 5%);
      }
    }

    &.level-warning {
      color: #ff9900;

      &:hover {
        color: lighten(#ff9900, 5%);
      }

      &:active {
        color: darken(#ff9900, 5%);
      }
    }

    &[disabled] {
      cursor: not-allowed;
      color: #a0a0a0;
    }
  }

  &.size-small {
    font-size: 0.75em;
    height: 28px;
    padding: 0 12px;
  }

  &.size-large {
    font-size: 1em;
    height: 44px;
    padding: 0 20px;
  }

  >.loadingSymbol {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 5px;
    border-radius: 7px;
    border-color: #2d8cf0 #2d8cf0 #2d8cf0 transparent;
    border-style: solid;
    border-width: 2px;
    animation: ui-spin 1s infinite linear;
  }
}

@keyframes ui-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
