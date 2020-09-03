import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import Loading from 'components/common/Loading'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();//非父子组件通信，事件总线
//插件toast
Vue.use(toast)
//插件loading
Vue.use(Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
