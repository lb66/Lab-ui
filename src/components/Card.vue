<template>
  <div class="demo">
    <div class="demo-head">
      <h2>{{component.__sourceCodeTitle}}</h2>
      <p>{{explain}}</p>
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
import { computed, ref } from "vue";
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

  &-head {
    padding: 16px;
    border-bottom: 1px solid $border-color;

    > h2 {
      font-size: 20px;
    }
  }

  &-component {
    padding: 16px;
    display: flex;
    width: 200px;
    align-items: center;

    :nth-child(1) {
      margin-right: 20px;
    }
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 12px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
