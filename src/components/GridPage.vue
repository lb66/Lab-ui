<template>
  <div>
    <Row gutter="16">
      <Col>1</Col>
      <Col>2</Col>
    </Row>
    <Row>
      <Col span="8">1</Col>
      <Col span="8" offset="8">2</Col>
    </Row>
    <Row>
      <Col span="4">1</Col>
      <Col span="20">11</Col>
    </Row>
  </div>
</template>

<script lang='ts'>
import Col from "../lib/Col.vue";
import Row from "../lib/Row.vue";
export default {
  components: { Col, Row },
};
</script>

<style lang="scss" scoped>
</style>