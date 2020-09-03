<template>
	<div class="funlist">
		<func-item v-for="item in list" :item='item'></func-item>
	</div>
</template>

<script>
	import funcItem from './funcItem'
	export default {
		name: 'funcList',
		props: {
			list: {
				type:Array,
				default() {
					return []
				}
			}
		},
		components: {
			funcItem
		}
	}
</script>

<style scoped>
.funlist{
	border-bottom: 0.15rem solid #ececec;
}
</style>