<template>
	<div class="goods">
		<goodslistItem v-for="(item,index) in goodslist" class="listchild"
									:key="item.index" 
									:itemlist="item"
									></goodslistItem>
	</div>
</template>

<script>
	import goodslistItem from './goodslistItem'
	export default {
		name:'goodsList',
		props:{
			goodslist: {
				type:Array,
				default() {
					return []
				}
			}
		},
		mounted() {
		},
		components: {
			goodslistItem
		}
	}
</script>

<style scoped>
.goods{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
</style>