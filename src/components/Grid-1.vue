<demo>
基础用法
</demo>
<template>
<Row>
  <Col span="16">span:16</Col>
  <Col span="8">span:8</Col>
</Row>
<br />
<Row>
  <Col span="8">span:8</Col>
  <Col span="12" offset="4">span:12,offset:12</Col>
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
