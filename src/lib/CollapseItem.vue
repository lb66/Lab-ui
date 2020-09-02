<template>
  <div class="ui-collapseItem">
    <div class="ui-collapseItem-title" @click="show=!show">{{title}}</div>
    <div class="ui-collapseItem-content" v-if="show">
      <slot />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    title: {
      type: String,
      default: "标题",
    },
  },
  setup() {
    const show = ref(false);
    return {
      show,
    };
  },
};
</script>

<style lang="scss">
.ui-collapseItem {
  &-title {
    border: 1px solid #d9d9d9;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
  }

  &-content {
    padding: 0 16px;
    min-height: 40px;
    display: flex;
    align-items: center;
  }
}
</style>
