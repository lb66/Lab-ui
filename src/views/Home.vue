<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>UI</h1>
      <h2>一个UI框架</h2>
      <p class="actions">
        <a href>GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  text-align: center;
}
</style>
