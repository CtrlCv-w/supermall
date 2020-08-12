<template>
  <div class="category-item">
    <div v-for="(item, index) in subCategories" :key="index">
         <a :href="item.link" class="item">
           <img v-lazy="item.image">
           <span>{{item.title}}</span>
         </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'CategoryItem',
    props:{
      subCategories:Array
    },
  }
</script>

<style scoped>
  .category-item{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .category-item>div{
    width: 28%;
    flex:0 0 auto;
    text-align: center;
    padding: 1%;
    margin: 5px 2%;
    font-size: 12px;
  }
  .item{
    display: block;
  }
  .item img{
    width: 90%;
    margin-bottom: 10px;
  }
</style>