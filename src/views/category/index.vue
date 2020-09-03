<template>
	<div class="category">
		<nav-bar class="navbar">
			<div slot='center'>分类</div>
		</nav-bar>
		<div class="main">
			<div class="main_slider">
				<main-slider-item 
					:sliderList="sliderList"
					@itemClick="itemClick" />
			</div>
			<div class="main_body">
				<scroll-view 
					class="scroll"
					ref="scroll">
					<sub-list :sublist="sublist"/>
					<tab-control 
						:title="['流行','新品','销售']" 
						@itemType="itemType"
						 ref='tab2'/>
					<goodslist :goodslist="goodsList[goodstype].list"/>
				</scroll-view>
			</div>
		</div>
		<tabar></tabar>
	</div>
</template>

<script>
	import NavBar from 'components/common/NavBar'
	import tabar from 'components/tabar'
	import { category, subcategory,subcategorydetail } from '@/network/category'
	import MainSliderItem from './children/MainSliderItem'
	import ScrollView from 'components/common/ScrollView'
	import SubList from './children/SubList'
	import TabControl from 'components/content/TabControl'
	import goodslist from 'components/home/goodslist'
	import { mapGetters } from 'vuex'
	export default {
		name:'category',
		components: {
			NavBar,
			tabar,
			MainSliderItem,
			ScrollView,
			SubList,
			TabControl,
			goodslist
		},
		data() {
			return {
				sliderList:[],
				sublist:[],
				goodsList:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]}
				},
				initItemkey:0,
				goodstype:'pop',
				activeItem:0
			}
		},
		created() {
			this.$loading.show()
			//获取侧边栏数据
			category().then(res => {
				return new Promise((resolve,reject) => {
					let list = res.data.data.category.list
					console.log(res.data)
					this.sliderList = list
					resolve(list)
				})
			}).then(list => {
					//获取侧边栏选中项的数据
					subcategory(list[0].maitKey).then(res => {
						this.sublist = res.data.data.list
						//获取tab栏数据
						this.getmultidata(list[0].miniWallkey);
						this.$loading.hide()
						// this.getGoodsLists(list[0].miniWallkey,'pop')
						// this.getGoodsLists(list[0].miniWallkey,'new')
						// this.getGoodsLists(list[0].miniWallkey,'sell')
					})
				})
			
		},
		methods: {
			itemClick(index) {
				this.$loading.show()
				let key = this.sliderList[index].maitKey
				let minikey = this.sliderList[index].miniWallkey
				subcategory(key).then(res => {
					this.sublist = res.data.data.list
					this.$loading.hide()
				})
				this.getmultidata(minikey)
			},
			subcategory(maitKey) {
				return subcategory(maitKey)
			},
			getGoodsLists(wallkey,type) {
				subcategorydetail(wallkey,type).then(res => {
					this.goodsList[type].wallkey = wallkey
					this.goodsList[type].list = res.data
					this.$refs.scroll.refresh()
				})
			},
			itemType(index) {
				switch(index) {
					case 0:
						this.goodstype = 'pop'
						break;
					case 1:
						this.goodstype = 'new'
						break;
					case 2:
						this.goodstype = 'sell'
						break;
				}
			},
			getmultidata(miniWallkey) {
				this.getGoodsLists(miniWallkey,'pop')
				this.getGoodsLists(miniWallkey,'new')
				this.getGoodsLists(miniWallkey,'sell')
			}
		}
	}
</script>

<style scoped>
.category{
	height: 100%;
	font-size: 0.28rem;
	text-align: center;
}
.navbar{
	background: #ff7d8f;
}
.main{
	width: 100%;
	height: calc(100% - 44px - 49px);
	display: flex;
	overflow: hidden;
}
.main_slider{
	width: 1.7rem;
	height: 100%;
	overflow: hidden;
}
.main_body{
	flex: 1;
}
.scroll{
	height: 100%;
}
</style>
