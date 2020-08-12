<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <category-list :categories="categories"
                   @listClick="listClick"></category-list>
    <scroll id="item-scroll" ref="scroll">
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
      currentType:'pop',
    }
  },
  created() {
    // 获取category网络请求数据
    this._getCategory()
  },
  computed: {
    showSubCategory(){
      if(this.currentIndex===-1) return []
      return this.categoryData[this.currentIndex].subCategories
    },
    showRecommends(){
      if(this.currentIndex===-1) return []
      return this.categoryData[this.currentIndex].recommends[this.currentType]
    }
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 取消监听图片加载=>高度刷新
    this.$bus.$off('imgLoad',this.imgRefresh)
  },
  methods: {
    // 获取分类菜单
    _getCategory(){
      getCategory().then((result) => {
      this.categories=result.data.data.category.list;
      for(let index in this.categories){
        this.categoryData[index]={
          subCategories:[],
          recommends:{
            'pop':[],//综合
            'new':[],//新品
            'sell':[]//热销
          }
        }
      }
      // 获取分类界面
      this._getSubCategory(0)
    })
    },
    // 获取分类界面
    _getSubCategory(index){
      this.currentIndex=index;
      // 获取maitKey
      let maitKey=this.categories[index].maitKey;
      // 发送请求
      getSubCategory(maitKey).then((result) => {
        // 结果保存
        this.categoryData[index].subCategories=result.data.data.list;
        // 对获取的分类界面进行记录?
        this.categoryData={...this.categoryData};
        // 获取推荐商品的数据
        this._getRecommends('pop')
        this._getRecommends('new')
        this._getRecommends('sell')
      })
    },
  // 获取推荐商品
  _getRecommends(type){
    // 获取推荐商品的miniWallkey
    let miniWallkey=this.categories[this.currentIndex].miniWallkey;
    // 发送请求
    getRecommends(miniWallkey,type).then((result) => {
      this.categoryData[this.currentIndex].recommends[type]=result.data;
      console.log(this.categoryData[this.currentIndex].recommends);
      this.categoryData={...this.categoryData}
    })
  },
  // 展示推荐商品
  tabClick(index){
    switch (index) {
      case 0: 
        this.currentType='pop';
        break;
      case 1: 
        this.currentType='new';
        break;
      case 2: 
        this.currentType='sell';
        break;
      }
    },
    // 分类选择
    listClick(index){
      this._getSubCategory(index);
    }
  }
}
</script>

<style scoped>
  .category{
    position: relative;
    height: 100vh;
    padding-top: 44px;
    padding-bottom: 50px;
    display: flex;
    background-color: #fff;
  }
  .nav-bar{
    background-color: #ff8198;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
  #item-scroll{
    flex: 1 0 auto;
    width: 73.3%;
    height: 100%;
    padding: 15px 2px 5px 15px;
    background-color: #fff;
    position: relative;
    top: 0px;
    right: 0px;
    overflow: auto;
  }
</style>