<template>
  <div class="popular">
    <a href="https://act.mogu.com/paihangbang?acm=3.mce.1_10_1muj0.122995.0.bbTeVs6CE8YzJ.sd_119-pos_1-m_532970-mc_122993">
      <img src="~assets/img/home/recommend_bg.png" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name:'PopularView',
  props:{
    popularLink:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .popular{
    position: relative;
    overflow: hidden;
    width: 98%;
    vertical-align: middle;
    margin: 0px 1%;
    border-radius: 12px;
    
  }
  .popular img{
    width: 100%;
  }
</style>