<template>
  <div id="app">
    <router-view />
    <main-tar-bar></main-tar-bar>
  </div>
</template>

<script>
// import MainTarBar from 'components/content/MainTarBar.vue'
import MainTarBar from "./components/content/MainTarBar.vue";
export default {
  name: "app",
  components: {
    MainTarBar,
    // MainTarBar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
@import "./iconfont/iconfont.css";
</style>
