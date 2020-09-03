<template>
	<div class="backup" v-show="isShow">顶</div>
</template>

<script>
	export default {
		name:'backUp',
		props:{
			isShow:Boolean
		}
	}
</script>

<style scoped>
	.backup{
		width: 1rem;
		height: 1rem;
		background: #fff;
		font-size: 0.5rem;
		color: #000;
		text-align: center;
		line-height: 1rem;
		box-shadow: 0.01rem 0.01rem 0.01rem 0 #ECECEC;
		position: fixed;
		right: 0.3rem;
		bottom: 1.2rem;
		border-radius: 50%;
	}
</style>
