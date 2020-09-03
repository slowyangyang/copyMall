<template>
	<div class="tab">
		<ul>
			<li v-for="(item,index) in title"  
			:class="{active:index == currentIndex}" 
			@touchstart ='clickitem(index)'><span>{{item}}</span></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'TabControl',
		data() {
			return {
				currentIndex:0
			}
		},
		props:{
			title:{
				type:Array,
				default() {
					return []
				}
			}
		},
		methods:{
			clickitem(index) {
				this.$emit('itemType',index);
				this.currentIndex = index
			}
		}
	}
</script>

<style scoped>
.tab{
	width: 100%;
}
.tab ul{
	height: 0.8rem;
	display: flex;
	text-align: center;
	line-height: 0.8rem;
	font-size: 0.32rem;
	background-color: #fff;
}
.tab ul li{
	flex: 1;
}
.tab ul li.active span{
	color: #FF2B2B;
	border-bottom: 0.06rem solid #FF2B2B;
	padding: 0.07rem;
}
</style>