<template>
  <div class="tab-control">
    <div class="tab-control-item" 
    v-for="(item, index) in titleNav" 
    :key="index" 
    :class="{active:index==currentIndex}"
    @click="activeItem(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TabControl',
    props:{
      titleNav:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex:0 //当前活跃的title
      }
    },
    methods: {
      activeItem(index){
        this.currentIndex=index;
        this.$emit('tabClick',index)
      }
    },
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 98%;
    height: 40px;
    line-height: 40px;
    position: relative;
    margin: 3px 1%;
    background-color: #fff;
    /* border-top: 1px solid rgba(100, 100, 100, .3); */
    border-bottom: 2px solid rgba(104, 100, 100, 0.2);
    border-radius: 8px;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 10px 20px;
  }
  .tab-control-item.active span{
    color: #FF6884;
    border-bottom: 2px solid #FF6884;
  }
</style>