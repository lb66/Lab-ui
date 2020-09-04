<template>
<div class="ui-tabs">
  <div class="ui-tabs-nav" ref="container">
    <div class="ui-tabs-nav-item" v-for="(t,index) in titles" :ref="el => {if(t===selected) selectedItem = el}" :key="index" @click="select(t)" :class="{selected:t===selected}">{{t}}</div>
    <div class="ui-tabs-nav-line" ref="line"></div>
  </div>
  <div class="ui-tabs-content">
    <component class="ui-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index" :class="{selected:c.props.title===selected}" />
  </div>
</div>
</template>

<script lang="ts">
import {
  ref,
  onMounted,
  onUpdated
} from "vue";
export default {
  props: {
    selected: String,
  },
  setup(props, context) {
    const defaults = context.slots.default();
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    const selectedItem = ref < HTMLDivElement > (null);
    const line = ref < HTMLDivElement > (null);
    const container = ref < HTMLDivElement > (null);
    const x = () => {
      const {
        width
      } = selectedItem.value.getBoundingClientRect();
      line.value.style.width = width + 32 + "px";
      const {
        left: left1
      } = container.value.getBoundingClientRect();
      const {
        left: left2
      } = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      line.value.style.left = left - 16 + "px";
    };
    onMounted(x);
    onUpdated(x);
    return {
      defaults,
      titles,
      select,
      line,
      selectedItem,
      container,
    };
  },
};
</script>

<style lang="scss">
.ui-tabs {
  &-nav {
    display: flex;
    border-bottom: 1px solid #d4d6d8;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 28px 0 16px;
      cursor: pointer;

      &:first-child {
        // margin-left: 0;
      }

      &.selected {
        color: #2d8cf0;
      }
    }

    &-line {
      position: absolute;
      height: 3px;
      background: #2d8cf0;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: left 0.3s;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>
