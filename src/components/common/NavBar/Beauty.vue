<template>
<!-- 导航切换页面瀑布流 -->
  <div class="container-water-fall">
    <waterfall
      :col="col"
      :data="data"
      @scroll="scroll"
      @finish="finish"
      :height="'100vh'"
    >
      <!-- <div class="info">
        <div class="info-main-img">
          <img src="../../../assets/img/choose.jpg" alt="" width="100%" />
        </div>
        <div class="info-main-intr">
          <div class="pinpai">
            <img
              src="../../../assets/img/logo.png"
              alt=""
              style="float: left"
            />
            <span>科颜氏</span>
          </div>

          <div class="info-main-bus">
            <span class="yinc"
              ><span class="bus">自营</span
              >明星同款同靠开开看靠靠靠靠kkkkkkkkkkk靠靠</span
            >
          </div>

          <div class="info-main-youhui">
            <span>下单立减35元</span>
            <span>包税</span>
          </div>

          <div class="info-main-price">优惠价<span>￥194</span></div>
        </div>
      </div> -->

      <div class="info" v-for="item in data" :key="item.index">
        <div class="info-main-img">
          <img :src="item.img" alt="" width="100%" />
        </div>
        <div class="info-main-intr">
          <div class="pinpai">
            <img :src="item.avatar" alt="" style="float: left" />
            <span>{{ item.brand }}</span>
          </div>

          <div class="info-main-bus">
            <span class="yinc"
              ><span class="bus">自营</span>{{ item.intro }}</span
            >
          </div>

          <div class="info-main-youhui">
            <span>{{ item.discount }}</span>
            <span>{{ item.bond }}</span>
          </div>

          <div class="info-main-price">
            优惠价<span>{{ item.price }}</span>
          </div>
        </div>
      </div>
    </waterfall>
  </div>
</template>

<script>
// import json from "./components/data.json";
import img1 from "../../../assets/img/choose.jpg";
import img2 from "../../../assets/img/chooseT.jpg";
import img3 from "../../../assets/img/dior.jpg";
import logo from "../../../assets/img/logo.png";
import logo1 from "../../../assets/img/logo1.png";

export default {
  name: "Beauty",
  data() {
    return {
      data: [
        {
          img: img2,
          avatar: logo,
          brand: "科颜氏",
          intro:
            "【阚清子同款】Kiehl's 科颜氏 亚马逊白泥面膜125毫升 专柜当家明星",
          discount: "下单立减35元",
          bond: "满200",
          price: "￥194",
        },
        {
          img: img3,
          avatar: logo1,
          brand: "迪奥",
          intro:
            "【全新丝绒999】Dior迪奥烈艳蓝金唇膏口红999哑光/滋润/840/888/720/772/760/100/080新版 3.5克",
          discount: "下单立减20元",
          bond: "包税",
          price: "￥69",
        },
        {
          img: img1,
          avatar: logo,
          brand: "科颜氏",
          intro:
            "【有效期至2023-08-01】ESTĒE LAUDER 雅诗兰黛 特润修护精华眼霜 小棕瓶“抗蓝光”眼霜 15毫升",
          discount: "下单立减30元",
          bond: "减30",
          price: "￥229",
        },
        {
          img: img2,
          avatar: logo,
          brand: "雅诗兰黛",
          intro: "【有效期至2023-08-01】ESTĒE LAUDER 雅诗兰黛 ",
          discount: "下单立减25元",
          bond: "包税",
          price: "￥229",
        },
        {
          img: img2,
          avatar: logo,
          brand: "科颜氏",
          intro:
            "【阚清子同款】Kiehl's 科颜氏 亚马逊白泥面膜125毫升 专柜当家明星",
          discount: "下单立减35元",
          bond: "满200",
          price: "￥194",
        },
        {
          img: img3,
          avatar: logo1,
          brand: "迪奥",
          intro:
            "【全新丝绒999】Dior迪奥烈艳蓝金唇膏口红999哑光/滋润/840/888/720/772/760/100/080新版 3.5克",
          discount: "下单立减20元",
          bond: "包税",
          price: "￥69",
        },
        {
          img: img1,
          avatar: logo,
          brand: "科颜氏",
          intro:
            "【有效期至2023-08-01】ESTĒE LAUDER 雅诗兰黛 特润修护精华眼霜 小棕瓶“抗蓝光”眼霜 15毫升",
          discount: "下单立减30元",
          bond: "减30",
          price: "￥229",
        },
        {
          img: img2,
          avatar: logo,
          brand: "雅诗兰黛",
          intro: "【有效期至2023-08-01】ESTĒE LAUDER 雅诗兰黛 ",
          discount: "下单立减25元",
          bond: "包税",
          price: "￥229",
        }, {
          img: img2,
          avatar: logo,
          brand: "雅诗兰黛",
          intro: "【有效期至2023-08-01】ESTĒE LAUDER 雅诗兰黛 ",
          discount: "下单立减25元",
          bond: "包税",
          price: "￥229",
        },
      ],
      col: 2,
    };
  },
  computed: {
    itemWidth() {
      return 138 * 0.5 * (document.documentElement.clientWidth / 375); //rem布局 计算宽度
    },
    gutterWidth() {
      return 9 * 0.5 * (document.documentElement.clientWidth / 375); //rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
    },
  },
  methods: {
    scroll(scrollData) {
      console.log(scrollData);
    },
    switchCol(col) {
      this.col = col;
      console.log(this.col);
    },
  },
};
</script>

<style>
* {
  margin: 0;
}
.yinc {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.info {
  display: flex;
  /* width: 100%; */
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  margin-bottom: 7px;
  background: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 12px 12px 12px 12px;
}
.main-img {
  /* width: 100%; */
}
.info-main-intr {
  padding: 0 8px;
}
.pinpai {
  margin: 5px 0;
}
.pinpai img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
.info-main-bus {
  display: flex;
  flex-direction: inherit;
  margin: 5px 0;
}
.bus {
  /* flex: 2; */
  width: 50px;
  height: 15px;
  line-height: 15px;
  padding: 1px 3px;
  background-color: red;
  color: #fff;
  border-radius: 8px;
  /* font-size: 12px; */
  margin-right: 5px;
}
.info-main-youhui {
  margin: 10px 0;
  /* height: 30px; */
}
.info-main-youhui span {
  /* height: 30px; */
  border: 1px solid red;
  color: red;
  margin: 0 8px 0 0;
  padding: 2px 4px;
  /* font-size: 14px; */
}
.info-main-price {
  color: red;
}
.info-main-price span {
  font-size: 20px;
}
</style>


