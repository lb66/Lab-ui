<template>
  <div>
    <h1>Button 按钮</h1>
    <Card :component="Button1" explain="按钮支持 default、primary、text 三种类型，默认为 default。" />
    <Card :component="Button2" explain="提供了大、中、小三种尺寸" />
    <Card :component="Button3" explain="按钮支持 success、warning、error 三种等级颜色" />
    <Card :component="Button4" explain="通过添加 disabled 属性可将按钮设置为不可用状态。" />
    <Card :component="Button5" explain="通过添加 loading 属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。" />
    <Card
      :component="Button6"
      explain="通过 icon 属性设置按钮图标<br/>通过设置 shape 属性为 circle1或circle2，可将按钮置为圆形状。"
    />
    <Card :component="Button7" explain="将多个 Button 放入 ButtonGroup 内，可实现按钮组合的效果。" />
  </div>
</template>

<script>
import Card from "./Demo.vue";
import Button1 from "./Button-1.vue";
import Button2 from "./Button-2.vue";
import Button3 from "./Button-3.vue";
import Button4 from "./Button-4.vue";
import Button5 from "./Button-5.vue";
import Button6 from "./Button-6.vue";
import Button7 from "./Button-7.vue";

export default {
  components: {
    Card,
  },
  setup() {
    return {
      Button1,
      Button2,
      Button3,
      Button4,
      Button5,
      Button6,
      Button7,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
