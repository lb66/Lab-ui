<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from "vue";
import { router } from "./router";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    let asideVisible;
    if (width <= 500) {
      asideVisible = ref(false);
      router.afterEach(() => {
        asideVisible.value = false;
      });
    } else {
      asideVisible = ref(true);
    }
    provide("asideVisible", asideVisible);
  },
};
</script>

<style scoped>
</style>
