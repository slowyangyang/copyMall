<template>
	<div class="bottombar">
		<div class="total">
			<i class="iconfont icon-duigou" 
					:class="{active:allCheck}"
					@touchstart="allClick"></i>
			<span class="showprice">合计:{{totalprice}}</span>
		</div>
		<button class="gome" 
						:disabled="calcCartLength === 0"
						:class="{active:calcCartLength}"
						@touchstart='checkOut'>去结算({{ calcCartLength }})</button>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'CartBottomBar',
		computed: {
			...mapGetters([
				'cartList',
				'allCheck',
				'totalprice',
				'cartListLength'
				]),
			calcCartLength() {
				return this.cartList.filter(item => item.isCheck).length
			},
			allCheck() {
				if(this.cartList.length == 0) return false
				return !(this.cartList.find(item => !item.isCheck))
			}
		},
		data() {
			return {
				isChecked:false
			}
		},
		methods: {
			allClick() {
				if(this.allCheck) {
					this.cartList.forEach(item => item.isCheck = false)
				}else{
					this.cartList.forEach(item => item.isCheck = true)
				}
			},
			checkOut() {
				console.log(2);
			}

		}
	}
</script>

<style scoped>
.bottombar{
	width: 100%;
	height: 0.9rem;
	font-size: 0.28rem;
	display: flex;
	/* border-top: 0.01rem solid #b7b7b7; */
	line-height: 45px;
	padding-left: 0.2rem;
	position: absolute;
	background: #f1f0f0;
	bottom: 49px;
}
.total{
	flex: 1;
}
.total i{
	font-size: 0.4rem;
	color: #E0DFDF;
	vertical-align: middle;
}
.total i.active{
	color:#F2270C;
}
.total span{
	vertical-align: middle;
}
.showprice{
	margin-left: 0.2rem;
}
.gome{
	width: 2rem;
	font-size: 0.33rem;
	text-align: center;
	line-height: 40px;
}
.gome.active{
	color: #fff;
	background: #FFA500;
}
</style>
