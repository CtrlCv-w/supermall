<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center" class="nav-title">购物车({{cartLength}})</div>
      <div slot="right" class="nav-tools" @click="clearCart">管理</div>
    </nav-bar>

    <scroll class="cart-scroll" ref="scroll" v-show="cartLength!==0">
    <cart-list :cartList="cartList"></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
// 滚动插件
import Scroll from 'components/common/scroll/Scroll'

// 购物车子组件
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childrencomps/CartList'
import CartBottomBar from './childrencomps/CartBottomBar'

// 购物车商品(vuex-映射)
import {mapGetters} from 'vuex'

export default {
  name:'Cart',
  components:{
    Scroll,
    NavBar,
    CartList,
    CartBottomBar,
  },
  data() {
    return {
      
    }
  },
  computed: {
    // 从vuex中导入购物车商品数据
    ...mapGetters(['cartLength','cartList','goodsLength'])
  },
    methods: {
      // 将点击管理事件传出
      clearCart(){
        this.$bus.$emit('clearCart');
      },
    },
  updated() {
    this.$refs.scroll.refresh()
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
  .cart{
    display: flex;
    justify-content: center;
    height: 100%;
    position: relative;
    padding-top: 44px;
    padding-bottom: 100px;
  }
  .nav-bar{
    background-color: #f0eeee;
  }
  .nav-title{
    font-size: 16px;
    color: rgb(34, 34, 34);
    font-weight: bold;
  }
  .nav-tools{
    color: rgb(34, 34, 34);
  }
  .cart-scroll{
    height: 100%;
    width: 100%;
    background-color: #f0eeee;
    position: relative;
  } 
</style>