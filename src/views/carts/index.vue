<template>
	<div class="Carts">
		<nav-bar class="navbar" ref='navbar'>
			<div slot='center'>购物车({{cartListLength}})</div>
		</nav-bar>
		<scroll-view class="scroll" ref="scroll">
			<cart-item :cartList="cartList" />
		</scroll-view>
		<cart-bottom-bar></cart-bottom-bar>
		<tabar></tabar>
	</div>
</template>

<script>
	import NavBar from 'components/common/NavBar'
	import tabar from 'components/tabar'
	import ScrollView from 'components/common/ScrollView'
	import CartItem from './children/CartItem'
	import CartBottomBar from './children/CartBottomBar'
	import { mapGetters  } from 'vuex'
	export default {
		name:'carts',
		components: {
			NavBar,
			ScrollView,
			CartItem,
			tabar,
			CartBottomBar
		},
		data() {
			return {
				isCheck:false,
				cartList:this.$store.state.cartList
			}
		},
		activated() {
			this.$refs.scroll.refresh()
		},
		methods: {
			changecheck() {
				// this.isCheck = this.isCheck ? false : true
			}
		},
		computed: {
			...mapGetters([
			      'cartListLength'
			    ])
		}
	}
</script>

<style scoped>
.Carts{
	height: 100%;
}
.navbar{
	background: #ff7d8f;
}
.scroll{
	height: calc(100% - 44px - 49px - 40px);
}
</style>