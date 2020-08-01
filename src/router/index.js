import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Category from '../views/category/Category.vue'
import Cart from '../views/cart/Cart.vue'
import Profile from '../views/profile/Profile.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    component:Home
  },
  {
    path:'/category',
    name:"category",
    component:Category
  },
  {
    path:'/cart',
    name:'cart',
    component:Cart
  },
  {
    path:'/profile',
    name:'profile',
    component:Profile
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
})

export default router
