<template>
  <Screen :screenObj="templateDatas.screenObj">
    <div id="nav" class="app">
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
    </div>
  </Screen>
</template>
<script setup>
import Screen from "./layout/Screen.vue";
import { reactive } from "vue";
const templateDatas = reactive({
  screenObj: {
    width: 1920,
    height: 1080,
  },
});
</script>

<style lang="scss">
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
}

.fade-transform-leave-to {
  opacity: 0;
}

.app {
  color: #fff;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}
</style>
