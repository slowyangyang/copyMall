
<template>
	<header>
		{{ title }}
	</header>
</template>

<script>
	export default {
		name:'header',
		props:{
			title:{
				type:String,
				default:'喵喵影视'
			}
		},
		data() {
			return {
				
			}
		},
	}
</script>

<style scoped>
	header{
		width: 100%;
		height:0.98rem;
		font-size: 0.32rem;
		color: #fff;
		text-align: center;
		line-height: 0.98rem;
		background: #ff2b2b;
		/* position: fixed;
		top: 0;
		left: 0; */
	}
</style>
