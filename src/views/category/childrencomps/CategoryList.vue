<template>
  <div class="categories-list">
    <div v-for="(item, index) in categories" :key="index"
         class="item" :class="{active:currentIndex===index}"
         @click="listClick(index)">
      <div>
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'CategoryList',
    props:{
      categories:Array,
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
    position: fixed;
    left: 0px;
    z-index: 99;
  }
  .item{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    background-color: rgb(218, 218, 218);
  }
  .item.active{
    font-weight: bold;
    background-color: #f0eeee;
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