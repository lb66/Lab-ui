<template>
<div class="body-top">
  <Topnav />
  <div class="banner">
    <div class="title">
      <img src="/src/assets/title.png" />
    </div>
    <h2>一个UI框架</h2>
    <div class="actions">
      <a href="https://github.com/lb66/Lab-ui" target="_blank">GitHub</a>
      <router-link to="/doc">开 始</router-link>
    </div>
  </div>
</div>
<div class="body-bottom">
  <div class="part">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-vue" />
    </svg>
    <div>
      <h2>基于 Vue3</h2>
      <p>使用了 Vue3 组合式 api</p>
    </div>
  </div>
  <div class="part">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-ts" />
    </svg>
    <div>
      <h2>基于 TypeScript</h2>
      <p>源代码采用 TypeScript 书写</p>
    </div>
  </div>
  <div class="part">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-light" />
    </svg>
    <div>
      <h2>基于Vue3</h2>
      <p>每个组件的代码简洁易读</p>
    </div>
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
.body-top {
  color: #fff;
  background: rgb(255, 118, 112);
  background: linear-gradient(45deg,
      rgba(255, 118, 112, 1) 0%,
      rgba(255, 196, 115, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);

  >.banner {
    text-align: center;

    >.title {
      @media (max-width: 500px) {
        margin: 0 0 2vh 0;
      }

      margin: 16vh 0 2vh 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }

    >.actions {
      padding: 6vh 0 10vh 0;
      display: flex;
      justify-content: center;

      a {
        padding: 0 12px;
        line-height: 40px;
        display: inline-block;
        height: 40px;
        margin: 0 12px;
        border: 1px solid #fff;
        border-radius: 20px;
        width: 100px;

        &:hover {
          background-color: #fff;
          color: #000;
          transition: background-color 0.5s ease;
          transition: color 0.5s ease;
        }
      }
    }
  }
}

.body-bottom {
  display: flex;
  padding-top: 4vh;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    justify-content: start;
    padding: 2vh 0 0 2vh;
  }

  >.part {
    >.icon {
      width: 96px;
      height: 96px;
      margin-right: 10px;
    }

    display: flex;
    align-items: center;
    margin: 10px 20px;
  }
}
</style>
