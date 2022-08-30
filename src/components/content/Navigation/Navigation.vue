<!--  -->
<template>
  <div class="navigation">
    <ul v-for="item in list" :key="item.index">
      <li>
        <img :src="item" alt="" >
            <slot name="word"></slot>
    
      </li>
    </ul>
  </div>
</template>

<script>
import sign from '../../../assets/img/sign.png'
import food from '../../../assets/img/food.png'
import baby from '../../../assets/img/baby.png'
import beauty from '../../../assets/img/beauty.png'
import market from '../../../assets/img/market.png'
export default {
  name: "navigation",
  data() {
    return {
        props:{
            list:{
                type:Array,
                default:this.list
            }
        },
      list: [
        sign,
        food,
        baby,
        beauty,
        market
      ],
    };
  },

  components: {},

  methods: {},
};
</script>
<style scoped>
.navigation {
  display: flex;
  flex-flow: inherit;
  margin-top: 15px;
  height: 80px;
}

ul li {
  padding: 0 10px;
  list-style: none;
  width: 70px;
  height: 90%;
}
ul li img {
   width: 70px;
   height:70px;
}
</style>