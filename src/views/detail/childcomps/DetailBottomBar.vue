<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div @click="selectActive">
        <i class="icon select" :class="{active:select}"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailBottomBar",
    data() {
      return {
        select:false,
      }
    },
    methods: {
      addToCart() {
        this.$emit('addToCart')
      },
      selectActive(){
        this.select=!this.select;
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 50px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    padding: 0px 2%;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .bar-item {
    flex: 0 0 auto;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left {
    font-size: 12px;
    width: 40%;
  }

  .bar-left .icon {
    display: block;
    width: 16px;
    height: 16px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    position: relative;
    left: 0;
    right: 0;
    margin: 0px auto 5px;
  }
  .bar-left .icon.active{
    background-position:0 -19px;
  }
  .bar-left .service {
    background-position:0 -38px;
  }

  .bar-left .shop {
    background-position:0 -72px;
  }

  .bar-right {
    width: 60%;
    font-size: 14px;
    color: #fff;
    line-height: 40px;
    border-radius: 20px;
    overflow: hidden;
  }

  .bar-right .cart {
    background-image: linear-gradient(to right,rgba(248, 190, 0, 0.897), rgb(251, 122, 0));
    color: #fff;
  }

  .bar-right .buy {
    background-color: rgba(255, 81, 0, 0.931);
  }
</style>