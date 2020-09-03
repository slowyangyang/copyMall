<template>
	<div class="socol">
		<button
			class="race" 
			@touchstart="sub(index)">-</button>
		<span>{{item.count}}</span>
		<button @touchstart="add(index)">+</button>
	</div>
</template>

<script>
	export default {
		name: 'Counter',
		props: {
			index: {
				type:Number
			}
		}
	}
</script>

<style scoped>
.socol > button{
	width: 0.5rem;
	height: 0.5rem;
}
.socol span{
	width: 0.4rem;
	display: inline-block;
	text-align: center;
}
</style>
