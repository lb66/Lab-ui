<demo>
设置列元素间距
</demo>
<template>
<Row :gutter="20">
  <Col span="6">span:6</Col>
  <Col span="8">span:8</Col>
  <Col span="10">span:10</Col>
</Row>
</template>

<script lang="ts">
import Col from "../lib/Col.vue";
import Row from "../lib/Row.vue";
export default {
  components: {
    Col,
    Row,
  },
};
</script>
