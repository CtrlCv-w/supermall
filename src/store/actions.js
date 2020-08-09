export default {
  // 对加入的商品进行判断(有/无)
  addCart(context,payload){
    let oldProduct=context.state.cartList.find((item) => {
      return item.id === payload.id});
    if  (oldProduct) {
      context.commit('addCount',oldProduct);
    } else {
      context.commit('addProduct',payload)
    }
  },
  reduceCart(context,payload){
    if (payload.count>1) {
      context.commit('reduceCount',payload)
    }
  },
  removeCart(context,payload){
    context.commit('removeCount',payload)
  },
  changed(context,payload){
    context.commit('changed',payload)
  }
}