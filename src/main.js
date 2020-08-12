import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'
import Toast from 'components/common/toast'
// 导入字体图标
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

//关闭vue在console中的默认提示
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/loading/load.gif'),
  error:require('./assets/img/loading/loadfailure.jpg'),
})
// 将全局事件监听对象$bus放入Vue的原型中
Vue.prototype.$bus=new Vue()
//fastclick插件使用
FastClick.attach(document.body)
// 使用弹窗
Vue.use(Toast)
// 使用字体图标
fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
