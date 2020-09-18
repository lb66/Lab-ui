<template>
<div class="topnav">
  <svg class="toggleAside" @click="toggleMenu" v-if="toggleButtonVisible" aria-hidden="true">
    <use xlink:href="#icon-menu" />
  </svg>

  <router-link class="logo" to="/">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-lab-1" />
    </svg>
  </router-link>
  <ul class="menu">
    <li>
      <router-link to="/doc">文档</router-link>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from "vue";
export default {
  props: {
    toggleButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject < Ref < boolean >> ("asideVisible");
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {
      toggleMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 22px 42px;
  color: #fff;
  align-items: center;

  >.logo {
    margin-right: auto;

    >.icon {
      width: 2em;
      height: 2em;
      vertical-align: -0.15em;
    }
  }

  >.menu {
    display: flex;

    >li {
      margin: 0 1em;

      >a:hover {
        text-decoration: underline;
      }
    }
  }

  >.toggleAside {
    width: 36px;
    height: 36px;
    position: absolute;
    display: none;
    left: 16px;
    color: #000;
  }

  @media (max-width: 500px) {
    >.menu {
      display: none;
    }

    >.logo {
      margin: 0 auto;
    }

    >.toggleAside {
      display: inline-block;
    }
  }
}
</style>
