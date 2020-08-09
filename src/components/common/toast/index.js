import Toast from './Toast.vue'

const obj={}

  obj.install=function (Vue) {
    // 1.创建组件构造器
    const toastConstructor=Vue.extend(Toast)
    // 2.创建组件对象
    const toast= new toastConstructor()
    // 3.组件挂载
    toast.$mount(document.createElement('div'))
    // 4.组件插入
    document.body.appendChild(toast.$el)

    // 5.将需要封装的组件放入vue原型进行全局访问
    Vue.prototype.$toast=toast
  }

  export default obj