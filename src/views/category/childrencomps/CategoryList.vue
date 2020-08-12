<template>
  <scroll class="categories-list">
    <div v-for="(item, index) in categories" :key="index"
         class="item" :class="{active:currentIndex===index}"
         @click="listClick(index)">
      <div>
        <span>{{item.title}}</span>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
  export default {
    name:'CategoryList',
    props:{
      categories:Array,
    },
    components:{
      Scroll
    },
    data() {
      return {
        currentIndex:0,
      }
    },
    methods: {
      listClick(index){
        this.currentIndex=index;
        this.$emit('listClick',index);
      }
    },
  }
</script>

<style scoped>
  .categories-list{
    width: 100px;
    height: 100%;
    background-color: #fff;
    position: relative;
    top: 0px;
    left: 0px;
  }
  .item{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 100px;
    background-color: rgb(218, 218, 218);
  }
  .item.active{
    font-weight: bold;
    background-color: #fff;
    color: #ce5067;
    font-size: 15px;
  }
  .item.active >div{
    width: 100%;
    border-left: 4px solid #ce5067;
    border-right: 4px solid transparent;
    text-align: center;
  }
</style>