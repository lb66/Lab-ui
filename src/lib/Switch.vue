<template>
  <button :class="{checked:value}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang='ts'>
import { ref } from "vue";
export default {
  props: {
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

<style lang="scss" scoped>
button {
  outline: none;
  position: relative;
  height: 22px;
  width: 44px;
  border: none;
  background: #cccccc;
  border-radius: 22px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.4s;
  cursor: pointer;
  > span {
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    background: white;
    border-radius: 22px;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }
  &:active {
    > span {
      width: 26px;
    }
  }
}
button.checked {
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