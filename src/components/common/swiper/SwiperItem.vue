<template>
	<li :style="{ width:itemWidth+'px'}">
		<slot></slot>
	</li>
</template>

<script>
	export default {
		name: 'SwiperItem',
		data() {
			return {
				itemWidth:750
			}
		},
		mounted() {
			this.calcWidth();
		},
		methods:{
			calcWidth() {
				this.itemWidth = document.body.clientWidth;
			}
		}
	}
</script>

<style scoped>
li{
		list-style: none;
		height: 100%;
		float: left;
		overflow: hidden;
	}
li img{
		width: 100%;
	}
</style>
