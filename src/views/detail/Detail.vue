<template>
  <div id="detail" v-if="Object.keys(data).length!==0">
    <detail-nav-bar 
    @titleClick='titleClick'
    ref="nav"
    ></detail-nav-bar>

    <scroll class="detailScroll"
    ref="scroll" 
    :probe-type="3" 
    :pull-up-load="true"
    @scroll="scroll"
    @pull-up-load="showMore">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :baseInfo="baseInfo"></detail-base-info>
      <detail-comment-info 
      :commentInfo="commentInfo"
      ref="comment"
      ></detail-comment-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info 
      :goodsInfo="goodsInfo"
      @imgLoad="imgLoad"
      ref="params"
       ></detail-goods-info>
      <detail-goods-params :goodsParams="goodsParams"></detail-goods-params>
      <detail-recommend 
      :goodsRecommend="goodsRecommend"
      ref="recommend"
      ></detail-recommend>
    </scroll>
    <detail-bottom-bar @addToCart="addCart"></detail-bottom-bar>
    <back-top @backClick="backTop" v-show="isShowTop"></back-top>
  </div>
</template>

<script>
// BScroll插件
import Scroll from 'components/common/scroll/Scroll'
/**
 * 商品信息
 */
import DetailNavBar from './childcomps/DetailNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailCommentInfo from './childcomps/DetailCommentInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo'
import DetailGoodsParams from './childcomps/DetailGoodsParams'
import DetailRecommend from './childcomps/DetailRecommend'
import DetailBottomBar from './childcomps/DetailBottomBar'

import BackTop from 'components/common/backtop/BackTop';
// 高度刷新
import {imgLoad,debounce} from '../../common/minix.js'
// 网络请求方法
import {getDetail,getRecommend,BaseInfo,ShopInfo,GoodsInfo,GoodsParams} from 'network/detail.js'


  export default {
    name:'Detail',
    components:{
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailCommentInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailGoodsParams,
      DetailRecommend,
      DetailBottomBar,
      BackTop,
    },
    // 使用mixin内容
    mixins:[imgLoad],
    data() {
      return {
        // 保存商品id地址
        id:null,
        // 商品信息
        data:{},
        // 保存商品图片信息
        topImages:[],
        // 保存商品基本信息
        baseInfo:{},
        // 保存评论信息
        commentInfo:[],
        // 保存商家信息
        shopInfo:{},
        // 保存商品详细信息
        goodsInfo:{},
        // 保存商品参数
        goodsParams:{},
        // 推荐商品
        goodsRecommend:[],

        // 保存组件对应的高度
        currentTops: [],
        currentIndex:-1,
        // 判断回到顶部按钮的显示
        isShowTop:false,
        // 保存离开时的位置
        saveY:0,
      }
    },
    created() {
      // 商品地址
      this.id=this.$route.params.id;
      // 获取商品信息
      getDetail(this.id).then(result=>{
        this.data=result.data.result
        // 轮播图图片信息
        this.topImages.push(...this.data.itemInfo.topImages) ;
        // 商品基本信息
        this.baseInfo=new BaseInfo(this.data.itemInfo,this.data.columns,this.data.shopInfo.services);
        // 评论信息
        this.commentInfo.push(...this.data.rate.list);
        // 商家信息
        this.shopInfo=new ShopInfo(this.data.shopInfo);
        // 商品详情
        this.goodsInfo=new GoodsInfo(this.data.detailInfo);
        // 商品参数
        this.goodsParams=new GoodsParams(this.data.itemParams.info,this.data.itemParams.rule);

        // 页面渲染完成后计算组件的高度
        // this.$nextTick(()=>{
        // })
      })
      // 获取推荐商品信息
      getRecommend().then((result) => {
        this.goodsRecommend=result.data.data.list
      })
    },
    destroyed() {
      // 取消监听图片加载=>高度刷新
      this.$bus.$off('imgLoad',this.imgRefresh)
    },

    methods: {     
      /**
       * 事件监听
       */
    // 图片加载完成对高度进行刷新/获取组件位置
      imgLoad(){
        clearTimeout(reload)
        const reload = setTimeout(()=>{ 
          this.$refs.scroll.refresh();
          // 获取组件高度
          this.currentTops=[];
          this.currentTops.push(0);
          this.currentTops.push(this.$refs.comment.$el.offsetTop);
          this.currentTops.push(this.$refs.params.$el.offsetTop);
          this.currentTops.push(this.$refs.recommend.$el.offsetTop);
          },300); 
      },
    // 判断返回首页按钮是否显示/判断目前所在(组件)位置
      scroll(y){
        // 判断返回首页按钮是否显示/判断目前所在(组件)位置
        this.isShowTop = -y > 500; 
        // 判断目前所在(组件)位置
        for (let index = 0; index < this.currentTops.length; index++) {
          if(this.currentIndex!==index 
            && -y>=this.currentTops[index] 
            && -y<this.currentTops[index + 1]){
              this.currentIndex=index;
              this.$refs.nav.currentIndex=index;
          }  
        }
      },
    // 返回顶部
      backTop(){
      // 利用ref获取scroll内部的scroll对象,从而调用scroll对象内部的方法
      this.$refs.scroll.scrollTo(0,0,500)
      },
    // 加载更多推荐商品
      showMore(){
      this.showHomeGoods(this.currentGoods)
      // 对BS的高度进行刷新
      this.$refs.scroll.refresh()
      },
    // 点击顶部导航跳转
      titleClick(index){
        if (Object.keys(this.data).length!==0 || Object.keys(this.goodsRecommend).length!==0) {
          this.$refs.scroll.scrollTo( 0 , -this.currentTops[index] , 500)
          // 对BS的高度进行刷新
          this.$refs.scroll.refresh()  
        }
        },
    // 将商品加入购物车
      addCart(){
        // 获取购物车中展示的信息
        const product={};
        product.image=this.topImages[0];
        product.title=this.baseInfo.title;
        product,desc=this.baseInfo.desc;
        product.price=this.baseInfo.lowNowPrice;
        product.id=this.id
        // 将商品添加至购物车(vuex)
      }
    },
  }
</script>

<style scoped>
  #detail{
  box-sizing: border-box;
  margin: 0px;
  position: relative;
  height: 100%;
  padding-top: 44px;
  padding-bottom: 50px;
  }
  #detail .detailScroll{
  box-sizing: border-box;
  height: 100%;
  background-color: #f0eeee;
  position: relative;
  z-index: 99;
  }
</style>