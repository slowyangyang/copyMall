export default {
		addcounts(state,payload) {
			payload.count++
		},
		addcartList(state,payload) {
			state.cartList.push(payload)
		},
		addcount(state,index){
			state.cartList[index].count++
		},
		subcount(state,index){
			state.cartList[index].count--
		},
		delcartlist(state,index) {
			state.cartList.splice(index,1);
			JSON.stringify(localStorage.carts=state.carList)
		}
	}