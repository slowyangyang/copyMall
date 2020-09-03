<template>
	<div>
		<Swiper :list="list" height="7rem">
			<swiper-item v-for="(item,index) in list" >
				<img :src="item" alt="" @load="detailimgload">
			</swiper-item>
		</Swiper>
	</div>
</template>

<script>
	import Swiper from 'components/common//swiper/Swiper'
	import SwiperItem from 'components/common//swiper/SwiperItem'
	export default {
		name: 'DetailSwiper',
		data() {
			return {
				isload:true
			}
		},
		props: {
			list: {
				type:Array,
				default() {
					return []
				}
			}
		},
		methods: {
			swiperload() {
				this.$emit('swiperload')
			},
			detailimgload() {
				if(this.isload){
					this.$emit('detailimgload')
					this.isload = false
				}
			}
		},
		components: {
			Swiper,
			SwiperItem
		}
		
	}
</script>

<style scoped>

</style>

