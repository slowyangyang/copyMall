<template>
	<div class="main">
		<Loading v-if="isLoading"/>
		<nav-bar class="home-set">
			<div slot='center'>购物街</div>
		</nav-bar>
		<tab-control :title="['流行','新款','精选']"
									@itemType="itemtype"
									ref="tab1"
									class="tabControl"
									v-show="istabFixed"></tab-control>
			<scroll-view  class='scrolls' 
									:probetype="3" 
									:pullUpLoad='uploadoption'
									@pullingUp="pullingUp"
									@scrollY="scrollY"
									ref="scroll">
				<!-- <Swiper @swiperload="swiperload" :list="banner">
					<swiper-item v-for="(item,index) in banner" >
						<img :src="item.image" alt="">
					</swiper-item>
				</Swiper> -->
				<cinema-swiper :list="banner" @swiperload="swiperload"></cinema-swiper>
				<recommend :relist="recommend"></recommend>
				<feature></feature>
				<tab-control :title="['流行','新款','精选']"
											@itemType="itemtype"
											ref="tab2"></tab-control>
				<goodslist :goodslist="goodslist[currenttype].list"></goodslist>
			</scroll-view>
		<backUp @touchstart.native="backclick" :isShow="isShow"></backUp>
		<tabar ></tabar>
	</div>
</template>

<script>
	import Loading from 'components/common/Loading/Loading'
	import tabar from '@/components/tabar'
	import NavBar from 'components/common/NavBar'
	import { getMultiData, getGoodsList } from '@/network/cinema'
	import ScrollView from 'components/common/ScrollView'
	// import backUp from 'components/content/backUp'
	import CinemaSwiper from './cinemaSwiper'
	import recommend from 'components/home/recommend'
	import feature from 'components/home/Feature'
	import TabControl from 'components/content/TabControl'
	import goodslist from 'components/home/goodslist'
	import { debounce } from '@/common/untils'
	import { ListenerImgMixin, backTopMixin } from '@/common/mixin'
	import { msgbox } from 'components/common/msgBox'
	export default {
		name:'home',
		mixins: [ ListenerImgMixin, backTopMixin],
		data() {
			return{
				isLoading:true,
				result:'',
				banner:[],
				recommend:[],
				scroll:'',
				goodslist:{
					'pop': { page:0, list:[] },
					'new': { page:0, list:[] },
					'sell': { page:0, list:[] }
				},
				currenttype:'pop',
				uploadoption:{
					threshold: -50
				},
				tabcontrolHeight:0,
				istabFixed:false,
				saveY:0,
			}
		},
		activated() {
			this.$nextTick(() => {
				this.$refs.scroll.refresh()
				this.$refs.scroll.scrollTo(0,this.saveY,0)
			})
		},
		deactivated() {	
			//保存离开时的scroll位置
			this.saveY = this.$refs.scroll.getPositionY()
			//销毁这个全局监听事件
			this.$bus.$off('Listenerimgload',this.linstenImg)
		},
		mounted() {
			//获取轮播图片
			this.getMultiData()
			//获取三种类型的data
			this.getGoodsList('pop')
			this.getGoodsList('new')
			this.getGoodsList('sell')
			this.isLoading = false;
		},
		methods: {
			getMultiData() {
				getMultiData().then((res) => {
					this.banner = res.data.data.banner.list;
					this.recommend = res.data.data.recommend.list;
				})
			},
			getGoodsList(type) {
				let page = this.goodslist[type].page+1;
				getGoodsList(type,page).then((res) => {
					this.goodslist[type].list.push(...res.data.data.list);
					this.goodslist[type].page+=1;
					this.$refs.scroll.finishPullUp()
				})
			},
			pullingUp() {
				this.getGoodsList(this.currenttype)
			},
			scrollY(position) {
				//显示置顶按钮
				this.isShow = (-position.y) > 1000
				//tab吸顶
				this.istabFixed = (-position.y) > this.tabcontrolHeight
			},
			itemtype(index) {
				switch(index){
					case 0:
						this.currenttype = 'pop'
						break;
					case 1:
						this.currenttype = 'new'
						break;
					case 2:
						this.currenttype = 'sell'
						break;
				}
				//两个tabcontrol点击样式保持一致
				this.$refs.tab1.currentIndex = index
				this.$refs.tab2.currentIndex = index
			},	
			swiperload() {
				//获取contorl的offsetTop
				this.tabcontrolHeight = this.$refs.tab2.$el.offsetTop
			}
		},
		components: {
			tabar,
			NavBar,
			ScrollView,
			CinemaSwiper,
			recommend,
			feature,
			TabControl,
			goodslist,
			Loading
		}
	}
</script>

<style scoped>
	.home-set{
		background: #ff7d8f;
	}
	.scrolls{
		position: absolute;
		top:0.88rem;
		bottom: 0.98rem;
		left: 0;
		right: 0;
		overflow-y: hidden;
	}
	.tabControl{
		position: relative;
		z-index: 40;
		top: -0.01rem;
	}
</style>
