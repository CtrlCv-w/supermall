export default {
  // 商品类型数量
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  // 单个商品数量
  goodsLength(state) {
    return state.cartList.count
  },
  goodsChecked(state) {
    return state.cartList.filter(item => item.checked == true)
  },
}