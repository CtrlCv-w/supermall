<template>
  <div class="goods-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{"¥"+goodsItem.price}}</span>
        <span class="cfav">
          <img src="~assets/img/common/collect.svg" alt="">
          <span>{{goodsItem.cfav}}</span>
        </span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name:'GoodsItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
  .goods-item{
    overflow: hidden;
    flex:none;
    width: 46%;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    /* padding-bottom: 45px; */
    margin: 6px 1.5%;
    vertical-align: middle;
  }
  .goods-item img{
    width: 100%;
  }
  .goods-info{
    width: 100%;
    line-height: 15px;
    padding: 8px 8px 5px 8px ;
    white-space: nowrap;
  }
  .goods-info p{
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-bottom: 8px;
    font-size: 15px;
  }
  .goods-info .price{
    color: lightcoral;
    margin-right: 24px;
  }
  .goods-info .cfav{
    position: relative;
  }
  .goods-info .cfav img{
    width: 14px;
    margin-right: 2px ;
    position: absolute;
    left: -16px;
  }
</style>