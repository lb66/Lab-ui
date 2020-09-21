<demo>
按钮尺寸
</demo>

<template>
  <Button size="small">小型按钮</Button>
  <Button>普通按钮</Button>
  <Button size="large">大号按钮</Button>
  <br />
  <Button size="small" theme="primary">小型按钮</Button>
  <Button theme="primary">普通按钮</Button>
  <Button size="large" theme="primary">大号按钮</Button>
  <br />
  <Button size="small" theme="text">小型按钮</Button>
  <Button theme="text">普通按钮</Button>
  <Button size="large" theme="text">大号按钮</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
