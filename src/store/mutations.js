export default {
  // 已有商品,数量加一
  addCount(state, payload) {
    payload.count++
  },
  // 加入新商品
  addProduct(state, payload) {
    state.cartList.push(payload)
  },
  reduceCount(state,payload){
    payload.count--
  },
  removeCount(state,payload){
    let index=state.cartList.indexOf(payload);
    if(index!=-1){
      state.cartList.splice(index,1)
    }
  },
  changed(state,payload){
    let index=state.cartList.indexOf(payload);
    state.cartList[index].checked=!state.cartList[index].checked
  }
}