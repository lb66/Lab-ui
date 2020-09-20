<template>
<div>
  <h1>Switch 开关</h1>
  <div class="demo">
    <div class="demo-head">
      <h2>基础用法</h2>
      <p>通过v-model绑定开关的选中状态，true表示开，false表示关</p>
      <p>两种样式，theme的值可切换a或b，默认不写theme为a样式</p>
    </div>
    <div class="demo-component">
      <Switch1 />&nbsp;&nbsp;
      <switch3 />
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{Switch1.__sourceCode}}</pre>
    </div>
  </div>
  <div class="demo">
    <div class="demo-head">
      <h2>禁用状态</h2>
      <p>通过disabled属性来禁用开关，禁用状态下开关不可点击</p>
    </div>
    <div class="demo-component">
      <Switch2 />
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{Switch2.__sourceCode}}</pre>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Switch1 from "./Switch-1.vue";
import Switch2 from "./Switch-2.vue";
import Switch3 from "./Switch-3.vue";
import {
  ref
} from "vue";
export default {
  components: {
    Switch1,
    Switch2,
    Switch3,
    Button,
  },
  setup() {
    return {
      Switch1,
      Switch2,
      Switch3,
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

    >h2 {
      font-size: 20px;
    }
  }

  &-component {
    padding: 16px;
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
