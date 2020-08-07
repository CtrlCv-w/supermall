export const imgLoad = {
  data() {
    return {
      imgRefresh: null,
    }
  },
  mounted() {
    this.imgRefresh = () => {
      // 对BS的高度进行刷新,解决高度异常无法拉动的bug
      // 对刷新次数进行限制
      debounce(this.$refs.scroll.refresh, 500)()
    };
    // 接收items图片加载完成后的监听事件
    this.$bus.$on('imgLoad', this.imgRefresh);
  },
}
/**
*降频函数
*这个 debounce 函数在给定的时间间隔内只允许你提供的回调函数执行一次，
*以此降低它的执行频率。
*/
export const debounce=(func, wait) => {
  let timeout = null;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout)
    };
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}