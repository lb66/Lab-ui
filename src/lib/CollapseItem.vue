<template>
<div class="ui-collapseItem">
  <div class="ui-collapseItem-title" @click="toggle">
    <svg class="ui-icon" aria-hidden="true" :class="iconClass">
      <use :xlink:href="`#icon-right`" />
    </svg>
    {{title}}
  </div>

  <div class="ui-collapseItem-content" v-if="show">
    <slot />
  </div>
</div>
</template>

<script lang="ts">
import {
  ref,
  computed
} from "vue";
export default {
  props: {
    title: {
      type: String,
      default: "标题",
    },
  },
  setup(props, context) {
    const show = ref(false);
    const toggle = () => {
      show.value = !show.value;
    };
    const iconClass = computed(() => {
      return {
        ["ui-turnIcon"]: show.value,
        ["ui-turnIconBack"]: !show.value,
      };
    });
    return {
      toggle,
      show,
      iconClass,
    };
  },
};
</script>

<style lang="scss">
.ui-collapseItem {
  &-title {
    border: 1px solid #d9d9d9;
    margin: -1px -1px 0 -1px;
    min-height: 40px;
    display: flex;
    align-items: center;
    padding: 0 6px;
    background: #f7f7f7;
    // border-bottom: none;
    user-select: none;
  }

  &:first-child {
    >.ui-collapseItem-title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  &:last-child {
    >.ui-collapseItem-title:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-bottom: none;
    }
  }

  &-content {
    padding: 12px 16px;
  }

  .ui-icon {
    margin: 0 8px;

    &.ui-turnIcon {
      transition: transform 0.3s;
      transform: rotateZ(90deg);
    }

    &.ui-turnIconBack {
      transition: transform 0.3s;
      transform: rotateZ(0deg);
    }
  }
}
</style>
