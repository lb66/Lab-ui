<template>
  <div class="ui-buttonGroup">
    <slot />
  </div>
</template>

<script lang='ts'>
import "./ui.scss";
export default {};
</script>

<style lang="scss">
.ui-buttonGroup {
  display: inline-flex;
  vertical-align: middle;
  > .ui-button {
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>