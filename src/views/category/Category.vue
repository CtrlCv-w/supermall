<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <scroll>
      <category-list :categories="categories"></category-list>
    </scroll>
    <scroll class="item-scroll" ref="scroll">
      <category-item :subCategories="showSubCategory"></category-item>
      <tab-control :titleNav="['综合','新款','热销']" 
                   @tabClick="tabClick"></tab-control>
      <category-recommends :recommends="showRecommends"></category-recommends>
    </scroll>
  </div>
</template>

<script>
// 网络请求
import {getCategory,getSubCategory,getRecommends} from 'network/category.js'
// BS插件
import Scroll from 'components/common/scroll/Scroll'
// 通用组件
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
// 子组件
import CategoryList from './childrencomps/CategoryList'
import CategoryItem from './childrencomps/CategoryItem'
import CategoryRecommends from './childrencomps/CategoryRecommends'
export default {
  name:'Category',
  components:{
    Scroll,
    NavBar,
    TabControl,
    CategoryList,
    CategoryItem,
    CategoryRecommends,
  },
  data() {
    return {
      // 商品列表
      categories:[],
      // 商品数据(+推荐)
      categoryData:{},
      currentIndex:-1,
      // 推荐商品的显示
      currentType:'gen',
    }
  },
  created() {
    // 获取category网络请求数据
    this._getCategory()
  },
  computed: {
    showSubCategory(){
      if(this.currentIndex==-1) return {}
      return this.categoryData[this.currentIndex].subCategories
    },
    showRecommends(){
      if(this.currentIndex==-1) return {}
      return this.categoryData[this.currentIndex].recommends[this.currentType]
    }
  },
  methods: {
    // 获取分类菜单
    _getCategory(){
      getCategory().then((result) => {
      this.categories=result.data.data.category.list;
      for(let index in this.categories){
        this.categoryData[index]={
          subCategories:{},
          recommends:{
            'gen':[],//综合
            'new':[],//新品
            'sale':[]//热销
          }
        }
      }
    })
    },
    // 获取分类界面
    _getSubCategory(index){
      this.currentIndex=index;
      // 获取maitKey
      let maitKey=this.categories[index].maitKey;
      // 发送请求
      getSubCategory(maitKey).then((result) => {
        this.categoryData[index].subCategories=result.data.data;
        // 对获取的分类界面进行记录?
        this.categoryData={...this.categoryData};
        // 获取推荐商品的数据
        this._getRecommends('gen')
        this._getRecommends('new')
        this._getRecommends('sale')
      })
    },
  // 获取推荐商品
  _getRecommends(type){
    // 获取推荐商品的miniWallkey
    let miniWallkey=this.categories[this.currentIndex].miniWallkey;
    // 发送请求
    getRecommends(type).then((result) => {
      this.categoryData[this.currentIndex].recommends[type]=result.data;
      this.categoryData={...this.categoryData}
    })
  },
  // 展示推荐商品
  tabClick(index){
    switch (index) {
      case 0: 
        this.currentType='gen';
        break;
      case 1: 
        this.currentType='new';
        break;
      case 2: 
        this.currentType='sale';
        break;
      }
    },
  }
}
</script>

<style scoped>
  .category{
    position: relative;
    height: 100%;
    padding-top: 44px;
    padding-bottom: 50px;
  }
  .nav-bar{
     background-color: #ff8198;
    box-sizing: content-box;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
</style>