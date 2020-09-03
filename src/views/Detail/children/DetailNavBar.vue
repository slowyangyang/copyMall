<template>
	<nav-bar class="navbar">
		<div slot="left" 
					class="iconfont icon-fanhui1"
					@touchstart="$router.back()"></div>
		<div slot="center" class="center">
			<div v-for="(item,index) in title" 
						@touchstart="itemclick(index)"
						:class="{active : currentIndex == index}">{{ item }}</div>
		</div>
	</nav-bar>
</template>

<script>
	import NavBar from 'components/common/NavBar'
	export default {
		name: 'DetailNavBar',
		data() {
			return {
				currentIndex:0,
				title: ['商品','参数','评论','推荐']
			}
		},
		methods: {
			itemclick(index) {
				this.currentIndex = index
				this.$emit("itemClick",index)
			}
		},
		components: {
			NavBar
		}
	}
</script>

<style scoped>
.center{
	display: flex;
	align-items: center;
}
.center > div{
	flex: 1;
}
.center > div.active{
	color: #FF5777;
}
</style>
