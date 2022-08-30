<template>
  <tar-bar>
    <tar-bar-item path="/home">
      <!-- 未选择-->
      <span slot="item-icon" class="icon-shouye iconfont"></span>
      <!-- 选择 -->
      <span
        slot="item-icon-active"
        class="icon-shouye iconfont"
        style="color: red"
      ></span>
      <!-- <img slot="item-icon" class="icon-shouye iconfont" alt="">
      <img slot="item-icon-active" src="icon-shouye iconfont" alt=""> -->
      <div slot="item-text">首页</div>
    </tar-bar-item>

    <tar-bar-item path="/category">
      <span slot="item-icon" class="icon-fenlei iconfont"></span>
      <span
        slot="item-icon-active"
        class="icon-fenlei iconfont"
        style="color: red"
      ></span>
      <div slot="item-text">分类</div>
    </tar-bar-item>

    <tar-bar-item path="/cart">
      <span slot="item-icon" class="icon-gouwuche iconfont"></span>
      <span
        slot="item-icon-active"
        class="icon-gouwuche iconfont"
        style="color: red"
      ></span>
      <div slot="item-text">购物车</div>
    </tar-bar-item>
    <tar-bar-item path="/profile">
      <span slot="item-icon" class="icon-wodewo iconfont"></span>
      <span
        slot="item-icon-active"
        class="icon-wodewo iconfont"
        style="color: red"
      ></span>
      
      <div slot="item-text">我的</div>
    </tar-bar-item>
  </tar-bar>
</template>

<script>
// import TarBar from 'components/common/TarBar.vue'
// import TarBarItem from 'components/common/TarBarItem.vue'
import TarBar from "../common/TarBar.vue";
import TarBarItem from "../common/TarBarItem.vue";
export default {
  name: "MainTarBar",
  components: {
    TarBar,
    TarBarItem,
  },
};
</script>

<style scoped>
</style>