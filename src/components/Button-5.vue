<demo>
加载状态
</demo>

<template>
<Button loading disabled>加载中</Button>

<Button :loading="loading" @click="toLoading">
  <span v-if="!loading">点击我</span>
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
    const loading = ref(false);
    const loading2 = ref(false);
    const toLoading = () => {
      loading.value = true;
    };
    return {
      loading,
      toLoading,
      loading2,
    };
  },
};
</script>
