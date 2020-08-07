<template>
  <div class="goodsParams" v-if="Object.keys(goodsParams).length!==0">
    <table  class="info-size" >
      <tr v-for="(items, index) in goodsParams.sizes" :key="index">
        <td v-for="(item, indez) in items" :key="indez">
          {{item}}
        </td>
      </tr>
    </table>
    <table>
      <tr class="info-param" v-for="(item, index) in goodsParams.infos" :key="index">
        <td class="info-param-key">{{item.key}}</td>
        <td class="param-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="goodsParams.image.length !== 0">
      <img :src="goodsParams.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailGoodsParams',
    props:{
      goodsParams:{
        type:Object,
        default:{}
      }
    },
  }
</script>

<style scoped>
  .goodsParams {
    padding: 20px 15px;
    font-size: 14px;
    text-align: center;
  }

  .goodsParams table {
    width: 100%;
    border-collapse: collapse;
  }

  .goodsParams table tr {
    height: 42px;
  }

  .goodsParams table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .param-value {
    color: #eb4868
  }

  .info-img img {
    width: 100%;
  }
</style>