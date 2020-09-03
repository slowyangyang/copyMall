<template>
	<div>
		<Swiper :list="list">
			<swiper-item v-for="(item,index) in list" >
				<img :src="item.image" alt="" @load="swiperload">
			</swiper-item>
		</Swiper>
	</div>
</template>

<script>
	import Swiper from 'components/common//swiper/Swiper'
	import SwiperItem from 'components/common//swiper/SwiperItem'
	export default {
		name: 'cinimaSwiper',
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
