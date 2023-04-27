<template>
  <Screen>
    <div id="nav" class="app">
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
    </div>
  </Screen>
</template>
<script setup>
import Screen from "./layout/Screen.vue";
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
  // display: flex;
  // flex-flow: column;
  // padding: 0 15px 5px;
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
