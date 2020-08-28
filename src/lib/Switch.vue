<template>
  <button class="ui-switch" :class="{'ui-checked':value}" @click="toggle">
    <span :class="theme"></span>
  </button>
</template>

<script lang='ts'>
export default {
  props: {
    theme: { type: String, default: "a" },
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss" >
.ui-switch {
  outline: none;
  position: relative;
  height: 22px;
  width: 44px;
  border: none;
  background: #cccccc;
  border-radius: 22px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  cursor: pointer;
  > span {
    &.a {
      transform: scale(1.1);
    }
    &.b {
      transform: scale(0.75);
    }
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    background: white;
    border-radius: 22px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
  &:active {
    > span {
      width: 26px;
    }
  }
}
button.ui-checked {
  background: #2d8cf0;
  > span {
    left: 22px;
  }
  &:active {
    > span {
      width: 26px;
      margin-left: -4px;
    }
  }
}
</style>