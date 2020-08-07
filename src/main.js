import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

//关闭vue在console中的默认提示
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/loading/load.gif'),
  error:require('./assets/img/loading/loadfailure.jpg'),
})
// 将全局事件监听对象$bus放入Vue的原型中
Vue.prototype.$bus=new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
