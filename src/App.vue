<template>
	<div id="app" style="height: 100%;" class="no-touch">
		<keep-alive exclude="Detail,carts">
				<router-view />
		</keep-alive>
	</div>
</template>

<script>
	export default {
		name:'App'
	}
</script>

<style scoped>
</style>

