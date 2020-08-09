
<template>
  <tab-bar class="tab-bar">
    <tab-bar-items path="/home" activeColor='#FF5777'>
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-items>
    <tab-bar-items path='/category' activeColor='#FF5777'>
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-items>
    <tab-bar-items path='/cart' activeColor='#FF5777'>
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-items>
    <tab-bar-items path='/profile' activeColor='#FF5777'>
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-items>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItems from 'components/common/tabbar/TabBarItems'
export default {
    name:'MainTabBar',
    components:{
      TabBar,
      TabBarItems,
    },
}
</script>

<style>
  .tab-bar{
    border-top: 1px solid rgba(53, 52, 52, 0.143);
  }
</style>