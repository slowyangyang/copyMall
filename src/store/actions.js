export default {
	addcart({state,commit},payload) {
		let iid = payload.goodsInfo.iid
		let oldproduct = state.cartList.find((item) => item.iid == iid)
		if(oldproduct) {
			commit("addcounts",oldproduct)
			// oldproduct.count++
		}else{
			// state.cartList.push(payload.goodsInfo)
			commit("addcartList",payload.goodsInfo)
		}
	}
}