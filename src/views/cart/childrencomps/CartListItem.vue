<template>
  <div class="cart-list-item">
    <div class="shop-info">
      <div class="shop-img"></div>
      <div class="shop-name">
        {{itemInfo.shop}}
        <i class="arrow-right"></i>
      </div>
      <div class="remove right" @click="removeCart" v-show="clear">删除</div>
    </div>
    <div class="goods-info">
      <check-button 
      class="check-button"
      @selectItem="selectItem" 
      :checked="itemInfo.checked"
      @click.native="computeChecked"
      >
      </check-button>
      <div class="item-img">
        <img :src="itemInfo.image" alt="商品图片" />
      </div>
      <div class="item-info">
        <div class="item-title">{{itemInfo.title}}</div>
        <div class="item-desc">{{itemInfo.desc}}</div>
        <div class="info-bottom">
          <div class="item-price left">¥{{itemInfo.price}}</div>
          <div class="item-button right">
            <div class="crement" @click="decrement">-</div>
            <div class="item-count">{{itemInfo.count}}</div>
            <div class="crement" @click="increment">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'
export default {
  name: "CartListItem",
  props: {
    itemInfo: Object,
  },
  components:{
    CheckButton,
  },
  data() {
    return {
      clearCart:null,
      clear:false,
      isChecked:false,
    }
  },
  mounted() {
    this.clearCart=()=>{
      this.clear=!this.clear
    };
  
    this.$bus.$on('clearCart',this.clearCart)
  },
  methods: {
    decrement(){
      if (this.itemInfo.count > 1) {
        this.$store.dispatch('reduceCart',this.itemInfo)
      }
    },
    increment(){
      this.$store.dispatch('addCart',this.itemInfo)
    },
    removeCart(){
      this.$store.dispatch('removeCart',this.itemInfo)
    },
    selectItem(){
      this.$store.dispatch('changed',this.itemInfo)
    },
    computeChecked(){
      this.$bus.$emit('computeChecked')
    },
  },
    
}
</script>

<style scoped>
.cart-list-item {
  background-color: #fff;
  min-height: 250px;
  margin: 2% 1%;
  border-radius: 5%;
}
.shop-info {
  display: flex;
  text-align: center;
  line-height: 20px;
  padding: 15px 40px 5px;
  margin-bottom: 5px;
  position: relative;
}
.shop-info .shop-img {
  height: 18px;
  width: 18px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  background-position: 0 -79px;
  margin-right: 5px;
}
.shop-info .shop-name {
  font-weight: bold;
  color: #333;
}
.shop-name i {
  width: 6px;
  height: 6px;
  position: relative;
  bottom: 1.5px;
  margin: auto;
}
.shop-info .remove{
  line-height: 20px;
  width: 44px;
  right: 20px;
  color: rgb(255, 251, 251);
  background-color: rgb(255, 81, 0);
  text-align: center;
  position: absolute;
  border-radius: 7px;
}
/* 选择器样式 */
.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.goods-info {
  display: flex;

  height: 200px;
  width: 98vw;
}
.goods-info .check-button{
  position: relative;
  flex-shrink: 0;
  line-height: 18px;
  top: 40px;
  margin: 0px 10px 0px 5px;
}
.item-img img {
  width: 110px;
  height: 110px;
  display: block;
  border-radius: 5px;
}

.item-info {
  height: 100%;
  width: 70%;
  font-size: 16px;
  color: #333;
  padding: 0px 10px;
  position: relative;
}
.item-info .item-title,
.item-info .item-desc {
  line-height: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: pre-line;
  text-overflow: ellipsis;
  font-size: 15px;
}

.item-info .item-desc {
  padding: 0px 5px;
  font-size: 13px;
  color: #666;
  margin-top: 10px;
  background-color: #f5f4f4;
  border-radius: 5px;
}

.info-bottom {
  position: absolute;
  width: 90%;
  height: 20px;
  line-height: 20px;
  bottom: 15px;
}

.info-bottom .item-price {
  font-size: 15px;
  color: rgb(255, 58, 68);
}
.info-bottom .item-button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 76px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  border: 1px solid #f0eeee;
  border-radius: 5px;
}
.item-button .crement {
  flex: 1.2;
  width: 25%;
}
.item-button .item-count {
  flex: 2;
  border-right: 1px solid #f0eeee;
  border-left: 1px solid #f0eeee;
}
</style>