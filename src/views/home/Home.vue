<template>
  <div class="home">
    <nav-bar class="nav-home">
      <div slot="center">
        <span>购物街</span>
      </div>
    </nav-bar>
    <tab-control 
      :titleNav="['流行' , '新款' , '精选']" 
      @tabClick="tabClick"
      ref="tabcontrol1"
      class="fixed" v-show="isFixed">
      </tab-control>

    <scroll 
    class="wrapper" ref="scroll" 
    :probe-type="3" 
    :pull-up-load="true"
    @scroll="scroll"
    @pull-up-load="showMore"
    v-if="Object.keys(goods).length!==0">
      <home-swiper :homeBanners="homeBanners" @imgSwiperLoad="imgSwiperLoad" class="homeSwiper"></home-swiper>
      <home-recommend :homeRecommends="homeRecommends"></home-recommend>
      <popular-view :popularLink="[]"></popular-view>
      <tab-control 
      :titleNav="['流行' , '新款' , '精选']" 
      @tabClick="tabClick"
      ref="tabcontrol2"
      :class="{change:isFixed}">
      </tab-control>
      <goods-list :goods="goods[currentGoods].list"></goods-list>
    </scroll>

  <back-top @backClick="backTop" v-show="isShowTop"></back-top>
  </div>
</template>

<script>
// @ is an alias to /src
// 导入标题组件
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childrencomps/HomeSwiper";
import HomeRecommend from "./childrencomps/HomeRecommendView";
import PopularView from "./childrencomps/PopularView";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodslist/GoodsList";
import { getHomeMultidata, getHomeGoods } from "network/home.js";


// 导入滚动组件
import Scroll from "components/common/scroll/Scroll";

import BackTop from 'components/common/backtop/BackTop';
// 导入SC高度刷新
import {imgLoad} from '../../common/minix.js'

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    PopularView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  // 使用mixin内容
  mixins:[imgLoad],
  data() {
    return {
      // 创建变量接收网络请求结果
      homeBanners: [],
      homeRecommends: [],

      // 保存tab-control下的数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      // 保存点击的页面
      currentGoods: "pop",

      // 判断回到顶部按钮的显示
      isShowTop:false,

      // 获取tab-control距离顶部的值
      tabOffsetTop:0,
      isFixed:false,

      // 保存离开时的位置
      saveY:0,
    };
  },

  // 首页组件创建发送网络请求
  created() {
    this.getHomeMultidata();
    this.showHomeGoods("pop");
    this.showHomeGoods("new");
    this.showHomeGoods("sell");
  },

  // 监听离开或进入时用户滑到的位置
  deactivated() {
    this.saveY=this.$refs.scroll.getScrollY();
    // 取消监听图片加载=>高度刷新
    this.$bus.$off('imgLoad',this.imgRefresh)
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,200);
    this.$refs.scroll.refresh();
  },

  methods: {
    /**
     * 网络请求
     */
    // 获取轮播图数据
    getHomeMultidata() {
      getHomeMultidata().then((result) => {
        // 接收需要的网路请求结果
        this.homeBanners = result.data.data.banner.list;
        this.homeRecommends = result.data.data.recommend.list;
      });
    },

    // 获取tab-control下的商品数据
    showHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((result) => {
        // 将得到的结果保存
        // 改变地址值,可能会出现问题
        // this.goods[type].list=result.data.data.list;
        this.goods[type].list.push(...result.data.data.list); //正确赋值方法
        // 请求页码结果+1
        this.goods[type].page += 1;
      });
    },

    /**
     * 事件监听
     */

    // 选择显示商品
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentGoods = "pop";
          break;
        case 1:
          this.currentGoods = "new";
          break;
        case 2:
          this.currentGoods = "sell";
          break;
      };
      this.$refs.tabcontrol1.currentIndex=index;
      this.$refs.tabcontrol2.currentIndex=index;
    },

    // 返回顶部
    backTop(){
      // 利用ref获取scroll内部的scroll对象,从而调用scroll对象内部的方法
      this.$refs.scroll.scrollTo(0,0,500)
    },

     // 在轮播图加载完成后计算tab-control的位置
    imgSwiperLoad(){
      this.tabOffsetTop=this.$refs.tabcontrol2.$el.offsetTop;
    },
    // 判断返回首页按钮是否显示/固定tab-control选择栏
    scroll(y){
      // 判断返回首页按钮是否显示
      this.isShowTop = -y > 1000; 
      // 判断tab-control是否吸顶
      this.isFixed = -y > this.tabOffsetTop;
    },

    // 加载更多商品
    showMore(){
     this.showHomeGoods(this.currentGoods)
     // 对BS的高度进行刷新
     this.$refs.scroll.refresh()
    },
 
  },
};
</script>

<style scoped>
.home {
  padding-bottom: 49px;
  padding-top: 46px;
  background-color: #f0eeee;
  overflow: hidden;
  height: 100vh;
  position: relative;
}

.nav-home {
  background-color: #ff8198;
  box-sizing: content-box;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

/* 设置滚动组件的高度 */
.wrapper {
  position: relative;
  height: 100%;
}
.homeSwiper{
  border-radius: 8px 8px 10px 10px;
}
/* 改变显示的tabcontrol组件/并固定 */
 .fixed {
  position: fixed;
  z-index: 998;
  margin-top: 0px;
  top: 44px;
} 
/* 隐藏第一个组件 */
.change{
  visibility: hidden;
}
</style>
