<template>
    <swiper v-if="homeBanners.length">
      <swiper-items v-for="(item,index) in homeBanners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgSwiperLoad">
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
  data(){
    return {
      setOut:false,
    }
  },
  components:{
    Swiper,
    SwiperItems,
  },
  methods: {
    imgSwiperLoad(){
      if (!this.setOut) {
        this.$emit('imgSwiperLoad');
        this.setOut=true;
      }
    }
  },
}
</script>

<style scoped>

</style>