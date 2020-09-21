<demo>
按钮等级
</demo>

<template>
<Button level="success">成功按钮</Button>
<Button level="warning">警告按钮</Button>
<Button level="error">危险按钮</Button>
<br />
<Button theme="text" level="success">成功按钮</Button>
<Button theme="text" level="warning">警告按钮</Button>
<Button theme="text" level="error">危险按钮</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
