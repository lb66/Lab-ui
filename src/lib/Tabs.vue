<template>
<div class="ui-tabs">
  <div class="ui-tabs-nav">
    <div class="ui-tabs-nav-item" v-for="(t,index) in titles" :key="index" @click="select(t)" :class="{selected:t===selected}">{{t}}</div>
  </div>
  <div class="ui-tabs-content">
    <component class="ui-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index" :class="{selected:c.props.title===selected}" />
  </div>
</div>
</template>

<script lang="ts">
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
    return {
      defaults,
      titles,
      select,
    };
  },
};
</script>

<style lang="scss">
.ui-tabs {
  &-nav {
    display: flex;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: blue;
      }
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
