<!--  -->
<template>
  <div class="nav-item">
    <ul>
      <li>
        <div class="top">
          <!-- 上面 -->
          <slot name="top"></slot>
        </div>

         <div class="bottom">
          <!-- 下面 -->
          <slot name="bottom"></slot>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>
<style scoped>
.nav-item {
  display: flex;
  margin-left: 6px;
}
.nav-item ul {
  /* display: flex; */
  flex-flow: inherit;
   /* flex-direction: column-reverse;  */
  margin-top: 15px;
  height: 80px;
}
.nav-item ul li {
  /* flex: 2; */
  width: 75px;
  height: 75px;
  align-items: center;
 justify-content: space-around;
  /* padding: 0 10px; */
  list-style: none;
  /* width: 1px; */
  margin-right: 5px;
  /* height: 90%; */
  background-color: #fff;
  /* margin: 10px; */
}

.top {
  height: 70px;
  width: 70px;
  /* background-color: blue; */
}

.bottom {
  color: red;
  margin-top: 5px;
  overflow: hidden;
  text-align: center;
}
</style>