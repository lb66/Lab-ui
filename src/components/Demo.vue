<template>
<div class="demo">
  <div class="demo-head">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <p v-html="explain"></p>
  </div>
  <div class="demo-component">
    <component :is="component" />
  </div>
  <div class="demo-actions">
    <Button @click="toggleCode">查看代码</Button>
  </div>
  <div class="demo-code" v-if="codeVisible">
    <pre class="language-html" v-html="html" />
  </div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import {
  computed,
  ref
} from "vue";
const Prism = (window as any).Prism;
export default {
  props: {
    component: Object,
    explain: String,
  },
  components: {
    Button,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const toggleCode = () => (codeVisible.value = !codeVisible.value);
    const codeVisible = ref(false);
    return {
      Prism,
      codeVisible,
      toggleCode,
      html,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  border-radius: 8px;
  margin: 16px 0 32px;

  &:hover {
    box-shadow: 0 6px 20px -4px rgba(0, 0, 0, 0.2);
    border-color: #fff;
    transition: box-shadow 0.3s;
    transition: border-color 0.3s;
  }

  &-head {
    padding: 16px;

    >h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  &-component {
    padding: 0 16px 16px 16px;
    display: flex;
    align-items: center;
    width: 380px;
    flex-wrap: wrap;
    gap: 10px; //子元素间距
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 12px 16px;
    border-top: 1px dashed $border-color;

    >pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
