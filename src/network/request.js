import Vue from 'vue'
import axios from 'axios'

//把axios注册到Vue
Vue.prototype.$http = axios

export function request(config){
  // 创建axios实例
  const instance1=axios.create({
    // baseURL:'http://adi-v3.dev',
    // baseURL:'http://152.136.185.210:8000/api/z8',
    // baseURL:'http://123.207.32.32:8000/api/x6',
    baseURL:'http://106.54.54.237:8000/api/v1',
    timeout:'5000'
  });

  // 直接return ,axios的对象返回值就是promise!
  return instance1(config);
}