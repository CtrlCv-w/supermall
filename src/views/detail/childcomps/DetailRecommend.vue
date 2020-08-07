<template>
  <div class="recommend"  v-if="Object.keys(goodsRecommend).length!==0">
    <goods-item 
    v-for="(item, index) in goodsRecommend" 
    :goodsItem="item"
    :key="index"></goods-item>
  </div>
</template>

<script>
import GoodsItem from 'components/content/goodslist/GoodsItem'
  export default {
    name:'DetailRecommend',
    props:{
      goodsRecommend:Array
    },
    components:{
      GoodsItem,
    },
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    text-align: center;
    width: 98%;
    margin: 10px 1%;
  }
</style>