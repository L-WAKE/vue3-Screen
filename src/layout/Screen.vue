<template>
  <div class="ScreenAdapter" :style="style">
    <slot />
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import _ from "lodash";

const width = 1920;
const height = 1080;
const style = reactive({
  width: width + "px",
  height: height + "px",
  transform: "scale(1) translate(-50%, -50%)",
});
// 获取放大缩小比例
function getScale() {
  const w = window.innerWidth / width;
  const h = window.innerHeight / height;
  return w < h ? w : h;
}
// 设置比例
function setScale() {
  style.transform = "scale(" + getScale() + ") translate(-50%, -50%)";
}
onMounted(() => {
  setScale();
  window.onresize = _.debounce(setScale, 100);
});
</script>

<style lang="scss" scoped>
.ScreenAdapter {
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
}
</style>
