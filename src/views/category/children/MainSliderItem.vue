<template>
	<div class="sliderItem">
		<scroll-view class="scroll">
			<ul class="itemlist">
				<li v-for="(item,index) in sliderList" 
						:key="index"
						:class="{active : index == currentIndex}"
						@click="liClick(index,item.maitKey)">{{item.title}}</li>
			</ul>
		</scroll-view>
	</div>
</template>

<script>
	import ScrollView from 'components/common/ScrollView'
	export default {
		name: 'MainSliderItem',
		props: {
			sliderList: {
				type:Array,
				default() {
					return []
				}
			}
		},
		components: {
			ScrollView
		},
		data() {
			return {
				currentIndex:0
			}
		},
		methods: {
			liClick(index,key) {
				this.currentIndex = index
				this.$emit('itemClick',index)
			}
		}
	}
</script>

<style scoped>
.sliderItem{
	height: 100%;
	background: #f6f6f6;
}
.scroll{
	height: 100%;
}
.itemlist li{
	padding: 0.3rem 0;
	white-space: nowrap;
}
.itemlist li.active{
	border-left: 0.1rem solid #ff7d8f;
	background: #fff;
}
</style>
