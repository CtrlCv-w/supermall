<template>
  <swiper class="detailSwiper" v-if="topImages.length!==0">
    <swiper-items v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="">
    </swiper-items>
  </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItems from 'components/common/swiper/SwiperItems'
  export default {
    name:'DetailSwiper',
    components:{
      Swiper,
      SwiperItems,
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        },
        },
    },
  }
</script>

<style scoped>
  .detailSwiper{
    text-align: center;
    vertical-align: middle;
    height: 400px; 
    overflow: hidden;
    border-radius: 10px 10px 0px 0px ;
  }
</style>