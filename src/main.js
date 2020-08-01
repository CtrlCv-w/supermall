import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入网络请求
import {request} from './network/request'

//关闭vue在console中的默认提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

request({
  url:'/home/multidata'
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

request({
  url:'/recommend'
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
request({
  url:'/home/data'
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
request({
  url:'/detail'
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
request({
  url:'/category'
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
request({
  url:'/subcategory'
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
request({
  url:'/subcategory/detail'
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});