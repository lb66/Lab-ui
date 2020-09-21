<demo>
图标按钮及按钮形状
</demo>

<template>
<Button icon="like" shape="circle1"></Button>
<Button icon="like" shape="circle2"></Button>
<Button icon="like">喜欢</Button>
<Button icon="like" theme="primary">喜欢</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
