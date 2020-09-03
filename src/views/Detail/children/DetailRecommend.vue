<template>
	<div class="commendInfo">
		<goodslist :goodslist="recommendList"></goodslist>
	</div>
</template>

<script>
	import goodslist  from 'components/home/goodslist'
	export default {
		name: 'DetailRecommend',
		props: {
			recommendList: {
				type:Array,
				default() {
					return []
				}
			}
		},
		components: {
			goodslist
		}
	}
</script>

<style scoped>
.commendInfo{
	margin-top: 0.3rem;
}
</style>
