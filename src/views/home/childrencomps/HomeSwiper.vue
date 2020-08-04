<template>
    <swiper v-if="homeBanners.length">
      <swiper-items v-for="(item,index) in homeBanners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-items> 
    </swiper>
</template>

<script>
  import Swiper from 'components/common/swiper/Swiper'
  import SwiperItems from 'components/common/swiper/SwiperItems'

export default {
  name:"HomeSwiper",
  props:{
    homeBanners:{
      type:Array,
      default(){
        return [];
      },
    }
  },
  components:{
    Swiper,
    SwiperItems,
  }
}
</script>

<style scoped>

</style>