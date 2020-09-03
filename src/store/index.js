import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import carts from './modules/carts'


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		cartList:localStorage.carts === 'undefined' ? [] : JSON.parse(localStorage.carts)
	},
	mutations,
	actions,
	getters,
	modules: {
		carts
	}
})