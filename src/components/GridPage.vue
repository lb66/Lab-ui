<template>
<div>
  <h1>Grid 栅格</h1>
  <div>
    <Row>
      <Col span="16">16</Col>
      <Col span="8">8</Col>
    </Row>
    <br />
    <Row>
      <Col span="8">8</Col>
      <Col span="12" offset="4">12</Col>
    </Row>
    <br />
    <Row :gutter="20">
      <Col span="14">14</Col>
      <Col span="10">10</Col>
    </Row>
    <br />
    <Row :gutter="20">
      <Col span="6" offset="4">6</Col>
      <Col span="8">8</Col>
      <Col span="6">6</Col>
    </Row>
    <br />子元素向左排列
    <Row justify="start">
      <Col span="6">6</Col>
      <Col span="6">6</Col>
      <Col span="6">col-6</Col>
    </Row>子元素向右排列
    <Row justify="end">
      <Col span="6">6</Col>
      <Col span="6">6</Col>
      <Col span="6">6</Col>
    </Row>子元素居中排列
    <Row justify="center">
      <Col span="6">6</Col>
      <Col span="6">6</Col>
      <Col span="6">6</Col>
    </Row>子元素等宽排列
    <Row justify="between">
      <Col span="6">6</Col>
      <Col span="6">6</Col>
      <Col span="6">6</Col>
    </Row>子元素分散排列
    <Row justify="around">
      <Col span="6">6</Col>
      <Col span="6">6</Col>
      <Col span="6">6</Col>
    </Row>
  </div>
</div>
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

<style lang="scss" scoped>
</style>
