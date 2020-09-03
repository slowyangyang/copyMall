<template>
	<div class="shop">
		<div class="info_header">
			<img :src="shop.logo" alt="" class="info_header_logo"><span>{{shop.name}}</span>
		</div>
		<div class="shopInfo">
			<div class="shops">
				<div class="saleNum">
					<p>{{shop.sells}}</p>
					<p>总销量</p>
				</div>
				<div class="totalgoods">
					<p>{{shop.fans}}</p>
					<p>全部宝贝</p>
				</div>
			</div>
			<!-- <div class="line"></div> -->
			<div class="shopDesc">
				<p class="shop_desc" v-for="item in shop.scroe">
					<span>{{item.name}}</span>
					<span >{{item.score}}</span>
					<span :class="[ item.isBetter ? active : elva ]" class="koa">
						{{item.isBetter ? '高' : '低'}}
					</span>
				</p>
			</div>
		</div>
		<button class="entershop">进店逛逛</button>
	</div>
</template>

<script>
	export default {
		name: 'ShopInfo',
		props: {
			shop: {
				type:Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				elva:'elva',
				active:'active'
			}
		},
		computed: {
			isred(isbetter) {
				return 
			}
		},
		filters:{
			retain(val) {
				
			}
		}
	}
</script>

<style scoped>
.shop{
	padding-top: 0.5rem;
	font-size: 0.32rem;
	border-bottom: 0.15rem solid #ECECEC;
	background-color: #fff;
}
.info_header{
	padding:  0.2rem;
}
.info_header_logo{
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
	vertical-align: middle;
	margin-right: 0.3rem;
}
.info_header span{
	font-size: 0.5rem;
	vertical-align: middle;
}
.shopInfo{
	display: flex;
	font-size: 0.32rem;
	align-items: center;
}
.shopInfo > div{
	flex: 1;
	text-align: center;
}
.saleNum{
	margin-right: 0.5rem;
}
.shops{
	border-right: 0.01rem solid #ECECEC;
	font-size: 0.35rem;
}
.shops > div{
	display: inline-block;
	text-align: center;
}
.shops > div > p{
	margin-bottom: 0.2rem;
}
.shop_desc{
	display: flex;
	justify-content: space-between;
	padding: 0 0.5rem;
}
.shop_desc > span.koa{
	margin-bottom: 0.2rem;
}
.shop_desc > span.koa{
	padding: 0.03rem;
}
.shop_desc .elva{
	background-color: #0e8221;
}
.shop_desc .active{
	background-color: #ff0000;
}
.entershop{
	display: block;
	padding: 0.15rem 0.7rem;
	background: rgba(168, 182, 193,0.2);
	border-radius: 0.1rem;
	margin: 0.3rem auto;
	margin-bottom: 0.6rem;
}
</style>
