<template>
  <div class="goodsInfo" v-if="Object.keys(goodsInfo).length!==0">
    <div class="info-key">{{"———宝贝详情———"}}</div>
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{goodsInfo.info}}</div>
      <div class="end"></div>
    </div>
    <div class="info-list" v-for="(item, index) in goodsInfo.detailImage" :key="index">
      <img v-lazy="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailGoodsInfo",
    props:{
      goodsInfo:{
        type:Object,
      }
    },
    methods: {
      imgLoad(){
        this.$emit('imgLoad')
      }
    },
  }
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
  }

  .info-desc {
    margin: 10px 1% 5px 1%;
    padding: 0px 12px;
    background-color: #fff;
    border-radius: 10px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 3px 0 10px 15px;
    padding-top: 12px;
    text-align: center;
    color: rgb(105, 102, 102);
    font-size: 15px;
    padding-bottom: 5px;
  }
  .info-list{
    text-align: center;
  }
  .info-list img {
    width: 100%;
  }
  .info-list img[lazy="loading"]{
    width: 20px;
    height: 20px;
  }
</style>