
<template>
  <tab-bar>
    <tab-bar-items path="/home" activeColor='#FF5777'>
      <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="首页">
      <img slot="item-icon-active" src="../assets/img/tabbar/home_active.svg" alt="首页">
      <div slot="item-text">首页</div>
    </tab-bar-items>
    <tab-bar-items path='/category' activeColor='#FF5777'>
      <img slot="item-icon" src="../assets/img/tabbar/category.svg" alt="分类">
      <img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg" alt="分类">
      <div slot="item-text">分类</div>
    </tab-bar-items>
    <tab-bar-items path='/cart' activeColor='#FF5777'>
      <img slot="item-icon" src="../assets/img/tabbar/cart.svg" alt="购物车">
      <img slot="item-icon-active" src="../assets/img/tabbar/cart_active.svg" alt="购物车">
      <div slot="item-text">购物车</div>
    </tab-bar-items>
    <tab-bar-items path='/profile' activeColor='#FF5777'>
      <img slot="item-icon" src="../assets/img/tabbar/profile.svg" alt="我的">
      <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg" alt="我的">
      <div slot="item-text">我的</div>
    </tab-bar-items>
  </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItems from './tabbar/TabBarItems'
export default {
    name:'MainTabBar',
    components:{
      TabBar,
      TabBarItems,
    },
}
</script>

<style>

</style>