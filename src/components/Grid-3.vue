<demo>
Flex布局
</demo>

<template>
<p>左对齐</p>
<Row justify="start">
  <Col span="6">span:6</Col>
  <Col span="6">span:6</Col>
  <Col span="6">span:6</Col>
</Row>
<p>居中</p>
<Row justify="center">
  <Col span="6">span:6</Col>
  <Col span="6">span:6</Col>
  <Col span="6">span:6</Col>
</Row>
<p>右对齐</p>
<Row justify="end">
  <Col span="6">span:6</Col>
  <Col span="6">span:6</Col>
  <Col span="6">span:6</Col>
</Row>
<p>两端对齐</p>
<Row justify="between">
  <Col span="6">span:6</Col>
  <Col span="6">span:6</Col>
  <Col span="6">span:6</Col>
</Row>
<p>每个元素的两侧间隔相等</p>
<Row justify="around">
  <Col span="6">span:6</Col>
  <Col span="6">span:6</Col>
  <Col span="6">span:6</Col>
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
