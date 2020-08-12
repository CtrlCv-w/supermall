<template>
  <div class="goods-list"  v-if="Object.keys(goods).length!==0">
    <goods-item 
    v-for="(item, index) in goods" 
    :key="index" 
    :goodsItem="item"></goods-item>
    <span class="tip-info">正在努力加载啦~</span>
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
  .tip-info {
  z-index: -1;
  position: absolute;
  line-height: 30px;
  background-color: #f0eeee;
  bottom: -30px;
  left: 0;
  right: 0;
  text-align: center;
}
</style>