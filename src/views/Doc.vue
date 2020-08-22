<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">1</router-link>
          </li>
          <li>
            <router-link to="/doc/">2</router-link>
          </li>
          <li>
            <router-link to="/doc/">3</router-link>
          </li>
          <li>
            <router-link to="/doc/">4</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang='ts'>
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
aside {
  background: royalblue;
  width: 150px;
  padding: 16px;
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>