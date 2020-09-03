<template>
	<div class="warpper" ref="warpper" >
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name:'ScrollView',
		props:{
			probetype: {
				type:Number,
				default:0
			},
			pullUpLoad: {
				type:[Boolean,Object],
				default() {
					return false
				}
			}
		},
		data() {
			return {
				scroll,
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.warpper,{
				probeType:this.probetype,
				click:true,
				pullUpLoad:this.pullUpLoad//为true或对象时，开启上拉加载
				// {
				// 	 threshold: -50 // 在上拉到超过底部 80px 时，触发 pullingUp 事件
				// }
			})
			//监听滚动事件
			if(this.probetype )
			this.scroll.on("scroll",(position) => {
				this.$emit("scrollY",position)
			})
			//监听上拉加载
			if(this.pullUpLoad){
				this.scroll.on("pullingUp",() => {
					this.$emit("pullingUp")
				})
			}
		},
		methods:{
			finishPullUp() {//上拉加载更多默认只加载一次，所以完成一次后需要调用此方法
				this.scroll && this.scroll.finishPullUp();
			},
			scrollTo(x,y,time=400) {
				this.scroll && this.scroll.scrollTo(x,y,time)
			},
			refresh() {
				this.scroll && this.scroll.refresh()
			},
			getPositionY() {
				return this.scroll ? this.scroll.y : 0
			}
		}
	}
</script>

<style scoped>

</style>