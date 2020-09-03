<template>
	<div class="baseInfo" v-if="Object.keys(goods).length !== 0">
		<h4>{{goods.title}}</h4>
		<div class="price">
			<span class="newprice" :style="{color:this.goods.discountbg}">{{goods.newPrice}}</span>
			<del v-if="goods.oldPrice" class="oldprice">{{goods.oldPrice}}</del>
			<span class="note" v-if="goods.discount"
												:style="{background:this.goods.discountbg}">
												{{goods.discount}}
			</span>
		</div>
		<div class="supple">
			<p>{{goods.columns[0]}}</p>
			<p>{{goods.columns[1]}}</p>
			<p>{{goods.services[goods.services.length-1].name}}</p>
		</div>
		<div class="supple kill">
			<p v-for="item in goods.services.slice(0,4).length-1">
				<img :src="goods.services[item-1].icon" alt="">
				<span>{{goods.services[item-1].name}}</span>
			</p>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ShowInfo',
		props: {
			goods: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		mounted() {
		},
		computed: {
			discount_bg() {
				return "background:"+this.goods.discountbg ? this.goods.discountbg : '#ff0000'
			}
		}
	}
</script>

<style scoped>
.baseInfo{
	font-size: 0.32rem;
	padding: 0.3rem 0.2rem;
	color: #9e9e9e;
	border-bottom: 0.15rem solid #ECECEC;
	background-color: #fff;
}
.baseInfo h4{
	/* font-weight: bold; */
	font-size: 0.35rem;
	line-height: 0.4rem;
	margin-bottom: 0.2rem;
	color: #000000;
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
.price{
	margin: 0.3rem 0 0 0;
	padding-bottom:0.3rem;
}
.newprice{
	font-size: 0.6rem;
}
.oldprice{
	color: #9e9e9e;
	margin: 0 0.1rem;
}
.note{
	display: inline-block;
	color: #fff;
	border-radius: 0.3rem;
	padding: 0.08rem 0.15rem 0.05rem;
}
.supple{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.2rem 0 ;
	border-bottom: 0.01rem solid #ECECEC;
}
.supple > P{
	flex: 1;
	text-align: center;
	white-space: nowrap;
}
.supple > P >img{
	width: 0.3rem;
	height: 0.3rem;
}
.kill{
	border: 0;
	color: #666666;
}
.kill p img, .kill p span{
	vertical-align: middle;
}
</style>
