<template>
    <nav-bar>
      <div slot="left" @click="backHome" class="backHome">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <span 
        v-for="(item, index) in title" 
        :key="index" 
        @click="titleClick(index)"
        :class="{active:currentIndex==index}">
          {{item}}
        </span>
      </div>
      <div slot="right"></div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

  export default {
    name:'DetailNavBar',
    components:{
      NavBar,
    },
    data() {
      return {
        title:['商品','评论','参数','推荐'],
      // 当前选择的标题
        currentIndex:0,
      }
    },
    methods: {
      titleClick(index){
        setTimeout(()=>{
          this.currentIndex=index;
          // 将点击对象传出
          this.$emit('titleClick',index)   
        },100)
      },
      backHome(){
        this.$router.back();
      },
    },
  }
</script>

<style scoped>
  .nav-bar{
    box-sizing: border-box;
    border-bottom: 2px solid #f0eeee;
    position: fixed;
    top: 0px;
    background-color: #fff;
    /* z-index: 999; */
  }
  .backHome{
    height: 100%;
    text-align: center;
    vertical-align: middle;
  }
  .backHome img{
    width: 40%;
    margin-top: 15%;
  }

  .title{
    display: flex;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-around;
  }
  .title>span{
    box-sizing: content-box;
    flex: 1;
    height: 100%;
    font-size: 16px;
    border-bottom: 2px solid transparent;
  }
  .title .active{
    color: #ff8198;
    border-bottom: 2px solid #ff8198;
  }
</style>