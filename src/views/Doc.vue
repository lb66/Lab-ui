<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="asideVisible">
        <ol>
          <li :class="{selected:checked==='switch'}" @click="select('switch')">
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li :class="{selected:checked==='button'}" @click="select('button')">
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li :class="{selected:checked==='dialog'}" @click="select('dialog')">
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li :class="{selected:checked==='tabs'}" @click="select('tabs')">
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
import { inject, Ref, ref } from "vue";

export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const checked = ref("");
    const select = (string) => {
      checked.value = string;
    };
    return { asideVisible, checked, select };
  },
};
</script>

<style lang="scss" scoped>
aside {
  z-index: -1;
  position: absolute;
  bottom: 0;
  top: 50px;
  background: #f5f5f5;
  width: 200px;
  padding: 28px;
  > ol {
    > li {
      padding: 4px 16px;
      margin: 12px 0;
      &:hover {
        color: royalblue;
        border-left: 2px solid royalblue;
        font-weight: 700;
        padding: 4px 14px;
      }
      &.selected {
        border-left: 4px solid royalblue;
        color: royalblue;
        font-weight: 700;
        padding: 4px 12px;
      }
    }
  }
}
main {
  z-index: -2;
  position: absolute;
  top: 52.8px;
  bottom: 0;
  left: 200px;
  overflow: auto;
  background: white;
  right: 0;
  padding: 28px;
  @media (max-width: 500px) {
    left: 0;
  }
}
</style>