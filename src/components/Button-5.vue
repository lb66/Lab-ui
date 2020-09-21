<demo>
加载状态
</demo>

<template>
<Button loading disabled>加载中</Button>

<Button v-model:loading="loading1">
  <span v-if="!loading1">点击我</span>
  <span v-else>加载中</span>
</Button>

<Button theme="primary" v-model:loading="loading2">
  <span v-if="!loading2">点击我</span>
  <span v-else>加载中</span>
</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import {
  ref
} from "vue";
export default {
  components: {
    Button,
  },
  setup() {
    const loading1 = ref(false);
    const loading2 = ref(false);
    return {
      loading1,
      loading2,
    };
  },
};
</script>
