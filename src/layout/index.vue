<template>
  <div class="layout-box">
    <div class="header-box">头部</div>
    <div class="content-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup></script>
<style scoped lang="scss">
.layout-box {
  width: 100%;
  height: 100%;
  .header-box {
    width: 100%;
    height: 100px;
    background-color: gray;
  }
  .content-box {
    width: 100%;
    height: calc(100% - 100px);
  }
}
</style>
