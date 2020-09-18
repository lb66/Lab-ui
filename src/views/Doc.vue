<template>
<div>
  <Topnav toggleButtonVisible />
  <div class="content">
    <aside v-if="asideVisible">
      <ol>
        <li :class="{selected:checked==='/doc/switch'}" @click="select('switch')">
          <router-link to="/doc/switch">Switch 开关</router-link>
        </li>
        <li :class="{selected:checked==='/doc/button'}" @click="select('button')">
          <router-link to="/doc/button">Button 按钮</router-link>
        </li>
        <li :class="{selected:checked==='/doc/input'}" @click="select('input')">
          <router-link to="/doc/input">Input 输入框</router-link>
        </li>
        <li :class="{selected:checked==='/doc/dialog'}" @click="select('dialog')">
          <router-link to="/doc/dialog">Dialog 对话框</router-link>
        </li>
        <li :class="{selected:checked==='/doc/grid'}" @click="select('grid')">
          <router-link to="/doc/grid">Grid 栅格</router-link>
        </li>
        <li :class="{selected:checked==='/doc/toast'}" @click="select('toast')">
          <router-link to="/doc/toast">Toast 消息提示</router-link>
        </li>
        <li :class="{selected:checked==='/doc/tabs'}" @click="select('tabs')">
          <router-link to="/doc/tabs">Tabs 标签页</router-link>
        </li>
        <li :class="{selected:checked==='/doc/collapse'}" @click="select('collapse')">
          <router-link to="/doc/collapse">Collapse 折叠面板</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {
  useRouter
} from "vue-router";
import {
  inject,
  Ref,
  ref
} from "vue";

export default {
  components: {
    Topnav,
  },
  setup() {
    const path = useRouter().currentRoute.value.path; //当前路径
    const asideVisible = inject < Ref < boolean >> ("asideVisible");
    const checked = ref(path);
    const select = (string) => {
      checked.value = "/doc/" + string;
    };
    return {
      asideVisible,
      checked,
      select,
    };
  },
};
</script>

<style lang="scss" scoped>
aside {
  z-index: -1;
  position: absolute;
  bottom: 0;
  top: 0;
  background: #111;
  color: white;
  width: 18vw;
  padding: 80px 0 0 2vw;

  @media (max-width: 500px) {
    width: 100%;
    padding: 100px 0;
    text-align: center;
  }

  >ol {
    >li {
      padding: 4px 16px;
      margin: 12px 0;
      font-size: 18px;

      &:hover {
        color: #ff9401;
      }

      &.selected {
        color: #ff9401;
      }

      @media (min-width: 500px) {
        &:hover {
          border-left: 2px solid #ff9401;
          padding: 4px 14px;
        }

        &.selected {
          border-left: 4px solid #ff9401;
          font-weight: 700;
          padding: 4px 12px;
        }
      }
    }
  }
}

main {
  z-index: -2;
  position: absolute;
  top: 52.8px;
  bottom: 0;
  left: 18vw;
  overflow: auto;
  background: white;
  right: 0;
  padding: 28px;

  @media (max-width: 500px) {
    left: 0;
  }
}
</style>
