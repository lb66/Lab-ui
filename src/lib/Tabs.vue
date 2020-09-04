<template>
<div class="ui-tabs">
  <div class="ui-tabs-nav">
    <div class="ui-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{t}}</div>
  </div>
  <div class="ui-tabs-content">
    <component class="ui-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index" />
  </div>
</div>
</template>

<script lang="ts">
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return {
      defaults,
      titles,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
