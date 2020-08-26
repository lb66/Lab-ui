<template>
  <div>
    <h1>Button按钮</h1>
    <h2>---</h2>

    <Button>Default</Button>
    <Button theme="primary">Primary</Button>
    <Button theme="text">Text</Button>

    <h2>---</h2>
    <div>
      <Button size="small">Small</Button>
      <Button>Normal</Button>
      <Button size="large">Large</Button>
    </div>
    <div>
      <Button size="small" theme="primary">Small</Button>
      <Button theme="primary">Normal</Button>
      <Button size="large" theme="primary">Large</Button>
    </div>
    <div>
      <Button size="small" theme="text">Small</Button>
      <Button theme="text">Normal</Button>
      <Button size="large" theme="text">Large</Button>
    </div>
    <h2>---</h2>
    <div>
      <Button level="success">Success</Button>
      <Button level="warning">Warning</Button>
      <Button level="error">Error</Button>
    </div>
    <div>
      <Button theme="text" level="success">Success</Button>
      <Button theme="text" level="warning">Warning</Button>
      <Button theme="text" level="error">Error</Button>
    </div>
    <h2>---</h2>

    <Button disabled>Disabled</Button>
    <Button theme="text" disabled>Disabled</Button>

    <h2>---</h2>

    <Button loading>Loading</Button>
    <Button v-model:loading="loading1">
      <span v-if="!loading1">Click Me</span>
      <span v-else>Loading</span>
    </Button>
    <Button theme="primary" v-model:loading="loading2">
      <span v-if="!loading2">Click Me</span>
      <span v-else>Loading</span>
    </Button>

    <h2>---</h2>
    <Button icon="like" shape="circle1"></Button>
    <Button icon="like" shape="circle2"></Button>
    <Button icon="like">Like</Button>
    <Button icon="like" theme="primary">Like</Button>
    <h2>---</h2>
    <ButtonGroup class="xx">
      <Button>取消</Button>
      <Button theme="primary">确认</Button>
    </ButtonGroup>
    <ButtonGroup class="xx">
      <Button theme="primary">a</Button>
      <Button>b</Button>
      <Button>c</Button>
    </ButtonGroup>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";
import ButtonGroup from "../lib/ButtonGroup.vue";
import { ref } from "vue";
export default {
  components: { Button, ButtonGroup },
  setup() {
    const loading1 = ref(false);
    const loading2 = ref(false);
    return { loading1, loading2 };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  border: 1px solid #d4d6d8;
  border-width: 0 0 1.5px 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
Button {
  margin: 10px;
}
.xx {
  margin-right: 20px;
  > Button {
    margin: 10px 0;
  }
}

.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>