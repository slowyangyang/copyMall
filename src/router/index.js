import Vue from 'vue'
import  VueRouter from 'vue-router'
import homeRouter from './home'
import siderRouter from './sider'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    homeRouter,
    siderRouter,
    {
      path: '/',
      redirect: '/home'
    }
  ]
  
})

export default router