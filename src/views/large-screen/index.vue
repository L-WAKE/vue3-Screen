<template>
  <div class="big-content">
    <div class="test-scorll">
      <p v-for="item in 100">这是内容{{ item }}</p>
    </div>
  </div>
</template>

<script setup></script>
<style scoped lang="scss">
.big-content {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: url(@/assets/image/map_bg2.jpg) center no-repeat;
  // background-color: gray;
  background-size: 100% 100%;
  .test-scorll {
    // height: 300px;
    // overflow: auto;
  }
}
</style>
