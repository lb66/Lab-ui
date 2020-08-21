<template>
  <div class="topnav">
    <div class="logo">logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.topnav {
  border: 1px solid red;
  background: orange;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    > li {
      margin: 0 1em;
    }
  }
}
</style>