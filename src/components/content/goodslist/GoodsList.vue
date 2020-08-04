<template>
  <div class="goods-list">
    <goods-item v-for="(item, index) in goods" :key="index" :goodsItem="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'

export default {
  name:'GoodsList',
  components:{
    GoodsItem,
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .goods-list{
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