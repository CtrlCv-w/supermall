<template>
  <div class="swiper-items">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'SwiperItems',
}
</script>

<style>
  .swiper-items{
    width: 100%;
    /*设置图片弹性排列 */
    flex-shrink: 0;
  }
  .swiper-items img{
    width: 100%;
  }
</style>