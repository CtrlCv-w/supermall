<template>
  <div class="goods-item" @click="itemClick" v-if="Object.keys(goodsItem).length!==0">
      <img v-lazy="showImage" alt="" @load="imgLoad">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{"¥"+goodsItem.price}}</span>
        <span class="cfav">
          <img src="~assets/img/common/collect.svg" alt="">
          <span>{{goodsItem.cfav}}</span>
        </span>
      </div>
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
  },
  methods: {
    // 解决图片未完全加载BetterScroll高度异常的bug
    imgLoad(){
      // 将图片加载完成后的事件发送至VUE实例对象(bus)中
        this.$bus.$emit('imgLoad');
    },

    itemClick(){
        return this.$router.push("/detail/"+this.goodsItem.iid) || this.$router.push("/detail/"+this.goodsItem.item_id)
    }
  },

  computed: {
    showImage(){
      return this.goodsItem.img || this.goodsItem.image ||this.goodsItem.show.img ;
    }
  },
}
</script>

<style>
  .goods-item{
    overflow: hidden;
    flex:0 0 auto;
    width: 46%;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    /* padding-bottom: 45px; */
    margin: 6px 1.5%;
    vertical-align: middle;
    border-bottom: 1.5px solid rgba(104, 100, 100, 0.2);
  }
  .goods-item img{
    width: 100%;
  }
  .goods-item img[lazy="loading"]{
    margin: 40px 0px;
    width: 20px;
    height: 20px;
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