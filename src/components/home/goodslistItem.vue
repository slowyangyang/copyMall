<template>
	<div class='listitem' @click="itemclick(itemlist.iid)">
		<img :src="showImg" alt="" @load="itemimgload">
		<div class="info">
			<p class="info-title">{{itemlist.title}}</p>
			<span class="price">{{itemlist.price}}</span>
			<span class="iconfont icon-shoucang">{{itemlist.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'goodslistItem',
		props:{
			itemlist:{
				type:Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			itemimgload() {
				this.$bus.$emit("Listenerimgload")
			},
			itemclick(id) {
				this.$router.push({
					path:'/detail',
					query:{iid:id}
				})
			}
		},
		computed: {
			showImg() {
				// return this.itemlist.image || this.itemlist.show.img  
				return  this.itemlist.show ? this.itemlist.show.img : false || this.itemlist.image || this.itemlist.img
			}
		}
	}
</script>

<style scoped>
.listitem{
	width: 47%;
	overflow: hidden;
	position: relative;
	padding-bottom: 1rem;
}
.info-title{
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 0.34rem;
	text-align: center;
	margin-bottom: 0.1rem;
}
.info{
	width: 100%;
	font-size: 0.3rem;
	text-align: center;
	position: absolute;
	bottom: 0.25rem;
}
.info .price{
	margin-right: 0.2rem;
}
.listitem img{
	width: 100%;
	border-radius: 0.1rem;
	margin-bottom: 0.1rem;
}
.icon-shoucang{
	color: orange;
}
</style>