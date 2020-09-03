<template>
	<div class="bottomBar">
		<div class="icon_box">
			<div>
				<i class="iconfont icon-kefu"></i>
				<p>客服</p>
			</div>
			<div>
				<i class="iconfont icon-dianpu"></i>
				<p>店铺</p>
			</div>
			<div>
				<i class="iconfont icon-shoucang1"></i>
				<p>收藏</p>
			</div>
		</div>
		<div class="car_box">
			<span class="car" @touchstart="addcart" ref="car">加入购物车</span>
			<span class="nowbuy">立即购买</span>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'DetailBottomBar',
		methods: {
			addcart() {
				this.$emit("addcart")
			}
		}
	}
</script>

<style scoped>
.bottomBar{
	width: 100%;
	height: 1.2rem;
	font-size: 0.28rem;
	text-align: center;
	background: #fff;
	box-shadow: 0 0 0.3rem 0 #E0DFDF;
	display: flex;
}
.bottomBar > div{
	flex: 1;
}
.icon_box{
	display: flex;
	align-items: center;
}
.icon_box > div{
	flex: 1;
}
.icon_box > div > i{
	font-size: 0.4rem;
}
.icon_box > div > p{
	margin-top: 0.1rem;
}
.car_box{
	display: flex;
	align-items: center;
}
.car_box > span{
	display: block;
	flex: 1;
	height: 100%;
	line-height: 60px;
	color: #fff;
}
.car{
	background-image: linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c);
}
.nowbuy{
	background-image: linear-gradient(135deg,#ffba0d,#ffc30d 69%,#ffcf0d);
}
</style>