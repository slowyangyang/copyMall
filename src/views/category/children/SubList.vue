<template>
	<div class="sublist">
		<ul class="list">
			<li class="listItem" v-for="(item,index) in sublist">
				<a :href="item.link">
					<img :src="item.image" alt="">
					<p>{{item.title}}</p>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'SubList',
		props: {
			sublist: {
				type:Array,
				default() {
					return []
				}
			}
		},
		created() {
		}
	}
</script>

<style scoped>
.sublist{
	padding: 0.2rem;
}
.list{
	display: flex;
	flex-wrap: wrap;
}
.listItem{
	width: 1.7rem;
	margin-right: 0.1rem;
	margin-bottom: 0.2rem;
}
.listItem a img{
	width: 100%;
	margin-bottom: 0.13rem;
}
</style>
