<template>
  <div id="bs-wrapper">
    <div class="bs-content">
      <slot></slot>
      <span class="tip-info">正在努力加载啦~</span>
    </div>
  </div>
</template>

<script>
import BSroll from 'better-scroll'
  export default {
    name:'Scroll',
    // 在父组件中决定是否需要位置监听
    props:{
      probeType:{
        type:Number,
        default:1
      },
      // 在父组件中决定是否需要上拉监听
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {
        scroll:null,
      }
    },
    mounted() {
      // 创建bs对象
      this.scroll=new BSroll(document.getElementById('bs-wrapper'),{
        // 设置当前应用组件是否需要监听当前滚动位置
        probeType:this.probeType,
        click:true,
        pullUpLoad:this.pullUpLoad,
      });

      // 将当前的位置传出
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
        this.$emit('showBtn',position.y)
      });

      // 监听上拉加载界面
      this.scroll.on('pullingUp',()=>{
        // console.log("加载");
        this.$emit('pullUpLoad')
        this.scroll.finishPullUp()
      })
    },
  }
</script>

<style scoped>
  .bs-content .tip-info{
    z-index: -1;
    position: absolute;
    bottom: -24px;
    left: 0;
    right: 0;
    text-align: center;
  } 
</style>