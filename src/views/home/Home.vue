<template>
  <div class="home">
    <nav-bar class="nav-home">
      <div slot="center">
        <span>购物街</span>
      </div>
    </nav-bar>

    <scroll 
    class="wrapper" ref="scroll" 
    :probe-type="3" 
    :pull-up-load="true"
    @showBtn="showBack"
    @pull-up-load="showMore">
      <home-swiper :homeBanners="homeBanners"></home-swiper>
      <home-recommend :homeRecommends="homeRecommends"></home-recommend>
      <popular-view :popularLink="[]"></popular-view>
      <tab-control 
      :titleNav="['流行' , '新款' , '精选']" 
      class="table-controls" 
      @tabClick="tabClick">
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
      // 创建变量保存点击的页面
      currentGoods: "pop",

      // 创建变量判断回到顶部按钮的显示
      isShowTop:false
    };
  },

  // 首页组件创建发送网络请求
  created() {
    this.getHomeMultidata();
    this.showHomeGoods("pop");
    this.showHomeGoods("new");
    this.showHomeGoods("sell");
  },

  mounted() {

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
      }
    },

    // 返回首页
    backTop(){
      // 利用ref获取scroll内部的scroll对象,从而调用scroll对象内部的方法
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },

    // 获取下一页商品请求
    showBack(y){
      // 判断返回首页按钮是否显示
      this.isShowTop = -y > 1000;     
    },
    // 加载更多商品
    showMore(){
     this.showHomeGoods(this.currentGoods)
    //  图片加载完成后对高度进行刷新
    this.$refs.scroll.scroll.refresh()
    }
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
}

.nav-home {
  background-color: #ff8198;
  box-sizing: content-box;
  color: white;
  letter-spacing: 2px;
  font-size: 22px;
}

/* 设置滚动组件的高度 */
.wrapper {
  position: relative;
  height: 100%;
}

.wrpaper .table-controls {
  position: fixed;
  top: 44px;
  z-index: 998;
  /* border-bottom: none; */
}
</style>
