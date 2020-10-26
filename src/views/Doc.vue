<template>
<div>
  <Topnav toggleButtonVisible />
  <div class="content">
    <transition name="fade">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/introduce">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/start">快速上手</router-link>
          </li>
        </ol>
        <h2>组件</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 输入框</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/grid">Grid 栅格</router-link>
          </li>
          <li>
            <router-link to="/doc/toast">Toast 消息提示</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
          <li>
            <router-link to="/doc/collapse">Collapse 折叠面板</router-link>
          </li>
          <li>
            <router-link to="/doc/poptip">Poptip 气泡提示</router-link>
          </li>
        </ol>
      </aside>
    </transition>
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
    const asideVisible = inject < Ref < boolean >> ("asideVisible");
    return {
      asideVisible,
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
  padding: 86px 0 0 2vw;

  @media (max-width: 500px) {
    width: 100%;
    padding: 80px 0 0 0;
    text-align: center;
  }

  >h2 {
    padding: 0 16px;
  }

  >ol {
    >li {
      padding: 4px 16px;
      margin: 12px 0;
      font-size: 16px;

      &:hover {
        color: #ff9401;
        transition: color 0.3s;
      }

      .router-link-active {
        color: #ff9401;
        font-weight: 700;
      }

      @media (min-width: 500px) {
        &:hover {
          border-left: 2px solid #ff9401;
          padding: 4px 14px;
        }
      }
    }
  }
}

main {
  z-index: -2;
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 18vw;
  overflow: auto;
  background: white;
  right: 0;
  padding: 24px;

  @media (max-width: 500px) {
    left: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-500px);
}
</style>
