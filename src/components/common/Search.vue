<!--  -->
<template>
  <div class="search">
    <div class="container">
      <span class="icon-31sousuo iconfont icon"></span>
      <input type="search" name="" id="" placeholder="请输入搜索商品" />
      <button class="btn">登录/注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>
<style  scoped>
.search {
    position: fixed;
    top:0;
  height: 55px;
  line-height: 55px;
  width: 100%;
  background-color: #fff;
  z-index: 999;
  
  
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  position: fixed;
  width: 95%;
  margin: 0 auto;
  color: #e31436;
  /* height: 100%; */
}
.icon {
  position: relative;
  left: 30px;
  top: 4px;
  font-size: 15px;
  z-index: 99;
}
input {
  flex: 4;
  position: relative;
  background-color: #ffffff;
  height: 33px;
  line-height: 33px;
  margin: 8px 8px 0 0;
  padding-left: 35px;
  border-radius: 25px;
  border: 1px solid #e31436;
}
.btn {
  display: inline-block;
   height: 33px;
  line-height: 33px;
  font-size: 13px;
  background-color: #fff;
  border: 1px solid red;
  border-radius: 10px;
   /* color: #e31436; */
  padding: 0 10px;
  margin-top: 7px;
}
</style>