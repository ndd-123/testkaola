<!--  -->
<template>
  <div>
    <search></search>
    <!-- <img src="../../assets/img/swiper.jpg" alt="" srcset=""> -->
    <div style="width: 95%; margin: 0 auto">
      <swiper>
        <swiper-item v-for="item in banners" :key="item.id">
          <a href="javascript:;"></a>
          <img :src="item.imgUrl" alt="" srcset="" />
          <!-- <img src="../../assets/img/swiper.jpg" alt="" srcset=""> -->
        </swiper-item>
      </swiper>

      <navigation></navigation>

      <div class="container-center">
        <!-- 硬核补贴 -->
        <div class="subsidy">
          <div style="flex: 3" class="subsidy-ms">
            <h3>硬核补贴</h3>
            <div class="ms">
              <span class="ms-box">{{ count }}</span>
              <!-- <span class="ms-box hours">{{ hours }}</span>
                <span>:</span>
                <span class="ms-box minute">{{ minute }}</span>
                <span>:</span>
                <span class="ms-box sec">{{ sec }}</span>  -->
            </div>
          </div>
          <div style="color: red; font-size: 15px; margin-right: 12px">
            大牌低价补贴>
          </div>
        </div>

        <div>
          <nav>
            <nav-item
              v-for="item in subSidyList"
              :key="item.index"
              style="float: left"
            >
              <img
                :src="item.image"
                alt=""
                slot="top"
                width="75px"
                height="75px"
              />
              <span slot="bottom">{{ item.name }}</span>
            </nav-item>
          </nav>
        </div>
      </div>

      <div>
        <!-- 导航 -->
        <nav-bar> </nav-bar>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../../components/common/Search.vue";
import Swiper from "../../components/common/Swiper/Swiper.vue";
import SwiperItem from "../../components/common/Swiper/SwiperItem.vue";
import Navigation from "../../components/content/Navigation/Navigation.vue";
// import {Swiper, SwiperItem} from '../../components/common/Swiper'
import imgUrl from "../../assets/img/swiper.jpg";
import NavBar from "../../components/common/NavBar/NavBar.vue";
import Nav from "../../components/content/Navigation/Nav.vue";
import NavItem from "../../components/content/Navigation/NavItem.vue";
import one from "../../assets/img/one.jpg";
import two from "../../assets/img/two.jpg";
import three from "../../assets/img/three.jpg";
import four from "../../assets/img/four.jpg";

export default {
  name: "Home",
  data() {
    return {
      banners: [
        {
          id: 1,
          imgUrl: imgUrl,
          // link:'http://www.baidu.com'
        },
        {
          id: 2,
          imgUrl: imgUrl,
        },
        {
          id: 3,
          imgUrl: imgUrl,
        },
        {
          id: 4,
          imgUrl: imgUrl,
        },
      ],
      subSidyList: [
        { image: one, name: "硬核价￥1449" },
        { image: two, name: "硬核价￥1449" },
        { image: three, name: "硬核价￥389" },
        { image: four, name: "硬核价￥7999" },
      ],
      // hours: "",
      // minute: "",
      // sec: "",
      count: "", //倒计时
      seconds: "", // 秒数
    };
  },

  components: {
    Search,
    Swiper,
    SwiperItem,
    Navigation,
    NavBar,
    Nav,
    NavItem,
  },

  mounted() {
    this.Time(); //调用定时器
  },
  methods: {
    countDown() {
      let d = parseInt(this.seconds / (24 * 60 * 60));
      d = d < 10 ? "0" + d : d;
      let h = parseInt((this.seconds / (60 * 60)) % 24);
      h = h < 10 ? "0" + h : h;
      let m = parseInt((this.seconds / 60) % 60);
      m = m < 10 ? "0" + m : m;
      // this.minute = m;
      let s = parseInt(this.seconds % 60);
      s = s < 10 ? "0" + s : s;
      // this.sec = s;
      this.count = h + ":" + m + ":" + s;
    },

    Time() {
      let nowTime = Date.now();
      let setDate = new Date("2022-8-31");
      let setTime = setDate.getTime(); //设定的时间
      this.seconds = (setTime - nowTime) / 1000;
      let timer = setInterval(() => {
        this.seconds -= 1;
        this.countDown();
      }, 1000);
      if (this.seconds == 0) {
        clearInterval(timer);
      }
    },
  },
};
</script>
<style scoped>
.container-center {
  width: 95%;
  margin: 0 auto;
  background-color: #fff;
  height: 160px;
  border-radius: 20px;
}
.subsidy {
  display: flex;
  flex-direction: inherit;
  padding-top: 6px;
  margin-left: 10px;
}

.subsidy-ms {
  display: flex;
  flex-direction: inherit;
}
.subsidy-ms .ms {
  margin-left: 8px;
  color: #fff;
}
.subsidy-ms .ms span {
  width: 20px;
  height: 20px;
  background-color: red;
  padding: 2px 4px;
  color: #fff;
}
</style>