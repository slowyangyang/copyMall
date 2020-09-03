export default {
	cartList(state) {
		return state.cartList
	},
	cartListLength(state) {
		return state.cartList.filter(item => item.isCheck).length
	},
	realcart(state) {
		return state.cartList.filter((item) => item.isCheck == true)
	},
	totalprice(state,getters) {
		return getters.realcart.reduce((total,item) => {
			return total+item.realprice * item.count
		},0).toFixed(2)
	}
}