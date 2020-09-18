<template>
<div>
  <Topnav />
  <div class="banner">
    <div class="logo">
      <img src="/src/assets/title.png" />
    </div>
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

.logo {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
