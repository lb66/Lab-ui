<template>
  <Layout style="height: 100vh;">
    <Sider class="demo">sider</Sider>
    <Layout>
      <Header class="demo">header</Header>
      <Content class="demo">content</Content>
      <Footer class="demo">footer</Footer>
    </Layout>
  </Layout>
</template>

<script>
import Layout from "../lib/Layout.vue";
import Header from "../lib/Header.vue";
import Footer from "../lib/Footer.vue";
import Content from "../lib/Content.vue";
import Sider from "../lib/Sider.vue";
export default {
  components: {
    Layout,
    Header,
    Footer,
    Content,
    Sider,
  },
};
</script>

<style lang="scss" scoped>
.demo {
  min-height: 100px;
}
</style>
