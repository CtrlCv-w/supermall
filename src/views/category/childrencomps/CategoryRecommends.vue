<template>
  <div class="goods-detail">
    <goods-item v-for="(item, index) in recommends" :key="index" :goodsItem="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from 'components/content/goodslist/GoodsItem'
  export default {
    name:'CategoryRecommends',
    props:{
      recommends:Array
    },
    components:{
      GoodsItem,
    },
    methods: {
      detailClick(index){
        this.$emit('detailClick',index)
      }
    },
  }
</script>

<style scoped>
  .goods-detail{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
</style>