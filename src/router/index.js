import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/Home'
// import Choose from '../components/common/NavBar/Choose.vue'

Vue.use(VueRouter)

// 懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

const routes = [
  {
    // 路由重定向
    path: '/',
    redirect: 'home',
    // component: HomeView
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/profile',
    component:Profile
  }
  // {
  //   path: '/choose',
  //   component:Choose
  // }
]

const router = new VueRouter({
  routes,
  mode:'history'
})


export default router
