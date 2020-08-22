<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
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
  z-index: 10;
  position: absolute;
  bottom: 0;
  top: 52.8px;
  background: royalblue;
  width: 200px;
  padding: 28px;
  > ol {
    > li {
      padding: 4px 16px;
      &:hover {
        color: orange;
        border-left: 2px solid red;
        font-weight: 700;
      }
      & .selected {
        border-left: 4px solid yellow;
      }
    }
  }
}
main {
  position: absolute;
  top: 52.8px;
  bottom: 0;
  left: 200px;
  overflow: auto;
  background: pink;
  right: 0;
  padding: 28px;
  @media (max-width: 500px) {
    left: 0;
  }
}
</style>