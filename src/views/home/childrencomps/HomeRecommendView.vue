<template>
  <div id="recommend-view">
    <div v-for="(item,index) in homeRecommends" :key='index'>
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeRecommend',
  props:{
    homeRecommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
#recommend-view{
  width: 98%;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  background-color: #fff;
  border-bottom: 6px solid rgba(100, 100, 100, .15);
  margin: 3px 1% 5px 1%;
  border-radius: 10px;
}
#recommend-view>div{
  flex-shrink: 0;
  width: 23%;
  padding-top: 15px;
}
#recommend-view a{
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 15px;

}
#recommend-view img{
  width: 80%;
  margin-bottom: 4px;
}

</style>