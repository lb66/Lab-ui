<demo>
按钮组
</demo>

<template>
  <ButtonGroup class="xx">
    <Button>取消</Button>
    <Button theme="primary">确认</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button theme="primary">a</Button>
    <Button>b</Button>
    <Button>c</Button>
  </ButtonGroup>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import ButtonGroup from "../lib/ButtonGroup.vue";
export default {
  components: {
    Button,
    ButtonGroup,
  },
};
</script>
