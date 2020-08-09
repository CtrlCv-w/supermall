<template>
  <div class="bottom-bar">
    <div>
      <div class="check" @click="checkedAll">
        <check-button class="check-button" :checked="checked"></check-button>
        <span>全选</span>
        <div class="goods" v-show="computeCounts">共：{{computeCounts}}件商品</div>
      </div>
    </div>
    <div class="compute-items">
      <div class="pay" @click="payFor">结算({{goodsChecked.length}})</div>
      <div class="computed">
        <span>合计：</span>
        <span class="price">¥{{computePrice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  data() {
    return {
      checked: false,
      // computePrice:0,
      // checkedGoods: [],
    };
  },
  mounted() {
    this.$bus.$on('computeChecked',this.computeChecked)
  },
  methods: {
    // 全选按钮
    checkedAll() {
      this.checked=!this.checked;
      if(this.checked){
        for (let item of this.cartList) {
          item.checked=true  
        }
      }else{
        for (let item of this.cartList) {
          item.checked=false  
        }
      }
    },
    // 判断商品是否全选中
    computeChecked(){
      if(this.cartLength === this.goodsChecked.length){
         this.checked=true
      }else{
        this.checked=false
      }
    },
    // 弹窗信息
    payFor(){
      if (this.goodsChecked.length===0) {
        this.$toast.showMessage('请选择需要购买的商品') 
      }
    }
  },
  computed: {
    ...mapGetters(["cartList", "cartLength", "goodsLength", "goodsChecked"]),
   
    // checkedItem() {
    //   return this.cartList.filter((item) => item.checked === true);
    // },
    // 计算选中商品的总价
    computePrice(){
      return this.goodsChecked.reduce((prev, cur) => {
        prev = prev + (cur.count * cur.price);
        return prev;
      }, 0).toFixed(2);
    },
    // 计算选中商品总数
    computeCounts(){
      return this.goodsChecked.reduce((prev, cur) => {
        prev = prev + cur.count
        return prev;
      }, 0);
    },
    
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50px;
  padding: 0px 5px 0px 8px;
  background-color: #fff;
  border-top: 1px solid rgba(53, 52, 52, 0.143);
  position: fixed;
  bottom: 50px;
}
.bottom-bar >div {
  flex: 5;
}
.check{
  display: flex;
  align-items: center;
}
.check-button{
  border: 2px solid #ccc;
  margin-right: 5px;
  margin-top: 1px;
  line-height: 16px;
}
.bottom-bar .goods{
  margin-top: 2px;
  margin-left: 6px;
  line-height: 12px;
  font-size: 10px;
}
.bottom-bar .compute-items {
  flex: 8;
  color: black;
}
.compute-items .computed{
  float: right;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  text-align: center;
}
.compute-items .price{
  color: rgb(255, 58, 68);
  font-size: 15px;
  font-weight: bold;;
}
.compute-items .pay {
  float: right;
  width: 90px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(
    to right,
    rgb(248, 108, 150),
    rgb(255, 84, 92)
  );
  border-radius: 20px;
}
</style>