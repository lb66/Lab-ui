<template>
  <div class="ui-input-wrapper">
    <input
      v-if="icon"
      class="ui-input inputWithIcon"
      type="text"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :clearable="clearable"
      @input="$emit('update:value',$event.target.value)"
    />
    <input
      v-else
      class="ui-input"
      type="text"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :clearable="clearable"
      @input="$emit('update:value',$event.target.value)"
    />
    <svg v-if="icon" class="ui-icon" aria-hidden="true" @click="onClick">
      <use :xlink:href="`#icon-${icon}`" />
    </svg>
    <svg v-if="clearable&&value" class="ui-icon ui-clearable" aria-hidden="true" @click="clear">
      <use xlink:href="#icon-cha" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    value: String,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    icon: String,
    onClick: Function,
  },
  setup(props, context) {
    const clear = () => {
      context.emit("update:value", null);
    };
    const onClick = () => {
      props.onClick?.();
    };
    return {
      clear,
      onClick,
    };
  },
};
</script>

<style lang="scss">
.ui-input-wrapper {
  position: relative;

  > .ui-input {
    height: 32px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 0 8px;

    &.inputWithIcon {
      padding-left: 28px;
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

    &.ui-clearable {
      position: relative;
      left: -22px;
      top: 9.5px;
      background: white;
    }
  }
}
</style>
