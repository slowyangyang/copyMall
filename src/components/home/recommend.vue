<template>
	<div>
		<ul>
			<li v-for="(item,index) in relist" :key="index">
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
		name:'recommend',
		props:{
			relist:{
				type:Array,
				default() {
					return []
				}
			}
			
		},
		mounted() {
		}
	}
</script>

<style scoped>
 ul{
	 display: flex;
	 font-size: 0.3rem;
	 color: #000000;
	 text-align: center;
	 background: #fff;
	 padding: 0.2rem 0 0.5rem;
	 border-bottom: 0.15rem solid #ececec;
 }
 ul li{
	 flex: 1;
 }
 ul li img{
	 width: 1.5rem;
	 height: 1.5rem;
	 margin-bottom: 0.18rem;
 }
</style>
