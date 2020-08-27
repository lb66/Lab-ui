<template>
  <template v-if="visible">
    <div class="ui-dialog-overlay"></div>
    <div class="ui-dialog-wrapper">
      <div class="ui-dialog">
        <header>x</header>
        <main>
          <p>1</p>
          <p>2</p>
        </main>
        <footer>
          <Button>取消</Button>
          <Button theme="primary">确定</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang='ts'>
import "./ui.scss";
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  props: {
    visible: Boolean,
  },
};
</script>

<style lang="scss">
footer {
  > Button {
    margin: 0 10px !important;
  }
}
.ui-dialog {
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 3px fade-out(#000, 0.5);
  border-color: #d9d9d9;
  min-width: 15em;
  max-width: 90%;
}
</style>