import Vue from 'vue'
import VueRouter from 'vue-router'
import categoryRouter from './category'
import mineRouter from './Mine'
import homeRouter from './home'
import cartsRouter from './carts'
import detailRouter from './Detail'
import loginRouter from './Login'
import registerRouter from './register'

Vue.use(VueRouter)

let router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes:[
       categoryRouter,
       mineRouter,
       homeRouter,
			 cartsRouter,
			 detailRouter,
			 loginRouter,
			 registerRouter,
	   {
		   path:'/',
		   redirect:'/home'
	   }
	   
    ]
})

export default router
