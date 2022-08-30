<!--  -->
<template>
  <div class="navbar">
    <div class="nav">
      <!-- <ul> -->
      <ul v-for="item in navTitle" :key="item.id">
        <li @click="checked(item.id)">
          <!-- <div :class="!item.isChecked ? '' : 'checked'" style="">
            {{ item.mainTitle }}
          </div>
          <span :class="!item.isChecked ? '' : 'checked-span'">{{
            item.title
          }}</span> -->
          <div :class="oxindex !== item.id ? '' : 'checked'" style="">
            {{ item.mainTitle }}
          </div>
          <span :class="oxindex !== item.id ? '' : 'checked-span'">{{
            item.title
          }}</span>
        </li>
      </ul>
    </div>

    <div>
      <ul v-for="item in navList" :key="item.id">
        <li @click="change(item.id)" v-show="oxindex == item.id">
          <div v-show="item.id == 1">
            <beauty></beauty>
          </div>
          <div v-show="item.id == 2">特惠</div>
          <div v-show="item.id == 3">美妆</div>
          <div v-show="item.id == 4">母婴</div>
          <div v-show="item.id == 5">数码</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Beauty from './Beauty.vue';

export default {
  data() {
    return {
      oxindex: 1,
      navTitle: [
        { id: 1, mainTitle: "精选", title: "猜你喜欢" },
        { id: 2, mainTitle: "特惠", title: "多买多省" },
        { id: 3, mainTitle: "美妆", title: "魅力妆粉" },
        { id: 4, mainTitle: "母婴", title: "家有萌宝" },
        { id: 5, mainTitle: "数码", title: "酷玩科技" },
      ],
      navList: [
        { id: 1, path: "/choose" },
        { id: 2, path: "../NavBar/Discount.vue" },
        { id: 3, path: "../NavBar/Beauty.vue" },
        { id: 4, path: "../NavBar/Beauty.vue" },
        { id: 5, path: "../NavBar/Beauty.vue" },
      ],
      // isChecked: true,
    };
  },

  components: { Beauty},

  methods: {
    checked(index) {
      console.log(index);
      this.oxindex = index;
    }
  },
};
</script>
<style scoped>
.navbar {
  margin-top: 25px;
}
.nav {
  flex: 1;
  display: flex;
  flex-flow: inherit;
  justify-content: space-around;
  height: 70px;
  width: 100%;
  margin: 0 auto;
}

.nav ul li {
  list-style: none;
  margin-left: 5px;
  text-align: center;
  line-height: 20px;
}
.checked {
  color: red;
}
.checked-span {
  border: 1px solid red;
  width: 50px;
  height: 30px;
  line-height: 30px;
  background-color: red;
  color: #fff;
  font-size: 8px;
  border-radius: 8px;
  padding: 0 5px;
}
</style>