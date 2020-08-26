<template>
  <div class="ui-inputWrapper">
    <input
      v-if="icon"
      class="ui-input inputWithIcon"
      type="text"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <input
      v-else
      class="ui-input"
      type="text"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <svg v-if="icon" class="ui-icon" aria-hidden="true">
      <use :xlink:href="`#icon-${icon}`" />
    </svg>
  </div>
</template>

<script lang='ts'>
import "./ui.scss";
export default {
  props: {
    value: String,
    placeholder: String,
    disabled: { type: Boolean, default: false },
    icon: String,
  },
  setup(props, context) {
    const change = (string) => {
      context.emit("input", string);
    };
    return { change };
  },
};
</script>

<style lang="scss">
.ui-inputWrapper {
  position: relative;
  > .ui-input {
    height: 32px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 0 8px;
    &.inputWithIcon {
      padding: 0 8px 0 28px;
    }
    &:hover {
      border-color: #409eff;
    }
    &:focus {
      box-shadow: 0 0 3px #409eff;
      outline: none;
      border-color: #409eff;
    }
    &[disabled] {
      cursor: not-allowed;
      color: #a0a0a0;
      border-color: #d9d9d9;
    }
  }
  > .ui-icon {
    position: absolute;
    z-index: 10;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>