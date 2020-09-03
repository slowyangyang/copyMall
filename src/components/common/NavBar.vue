<template>
	<div class="nav_bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default {
		name:'NavBar',
		props:{
			bgColor:{
				type:String,
				default:'#ff0000'
			}
		},
		data() {
			return {
				
			}
		},
		computed:{
			
		}
	}
</script>

<style scoped>
	.nav_bar{
		width: 100%;
		display: flex;
		height: 0.88rem;
		text-align: center;
		line-height: 0.88rem;
		font-size: 0.35rem;
		color: #fff;
		box-shadow: 0 0 0.05rem 0 #cecece;
	}
	.left, .right{
		width: 0.9rem;
	}
	.center{
		flex: 1;
	}
</style>