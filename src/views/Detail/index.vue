<template>
	<div class='main'>
		<detail-nav-bar @itemClick="toClick" ref="navbar"/>
		<scroll-view class="detail_scroll"
									ref="scroll"
									:probetype="3"
									@scrollY="scrolly">
			<detail-swiper :list="bannerList" 
											@detailimgload='detailimgload' 
											ref="swiper" />
			<show-info :goods="goods" ref="showInfo"/>
			<ShopInfo :shop="shop" ref="shopInfo"/>
			<detail-goods-info :detailInfo="detailInfo" 
													@lisenerinfoimg="lisenerinfoimg"
													ref="goodsInfo"/>
			<detail-param-info :paramInfo='paramInfo' ref="parameter"/>
			<detail-common-info :commonInfo="commonInfo" ref="commonInfo"/>
			<detail-recommend :recommendList="recommend" ref="recommendInfo"/>
		</scroll-view>
		<detail-bottom-bar @addcart="addcarts"/>
		<back-up :isShow='isShow' @touchstart.native="backclick"/>
	</div>
</template>

<script>
	import { getDetailData, getRcommend, goods, shop, User } from '@/network/detail'
	import DetailNavBar from './children/DetailNavBar'
	import ScrollView from 'components/common/ScrollView'
	import DetailSwiper from './children/DetailSwiper'
	import ShowInfo from './children/ShowInfo'
	import ShopInfo from './children/ShopInfo'
	import DetailGoodsInfo from './children/DetailGoodsInfo'
	import DetailParamInfo from './children/DetailParamInfo'
	import DetailCommonInfo from './children/DetailCommonInfo'
	import DetailRecommend from './children/DetailRecommend'
	import { ListenerImgMixin, backTopMixin } from '@/common/mixin'
	import { debounce } from '@/common/untils'
	import DetailBottomBar from './children/DetailBottomBar'
	export default {
		name: 'Detail',
		mixins: [ ListenerImgMixin, backTopMixin ],
		data() {
			return {
				bannerList:[],
				goods:{},
				shop:{},
				detailInfo:{},
				paramInfo: {},
				commonInfo: {},
				recommend: [],
				childrenTop: [],
				localcart:localStorage.carts || []
			}
		},
		created() {
			this.$loading.show()
			//请求详情数据
			getDetailData(this.$route.query).then(res => {
				// console.log(res.data)
				//获取轮播数据
				this.bannerList = res.data.result.itemInfo.topImages;
				//获取商品信息
				const data = res.data.result;
				this.goods = new goods(data.itemInfo, data.columns, data.shopInfo.services);
				//获取店铺详情数据
				this.shop = new shop(data.shopInfo)
				//获取展示图片数据
				this.detailInfo = data.detailInfo;
				//获取参数详情数据
				this.paramInfo = data.itemParams;
				//获取用户评价数据
				if(data.rate.cRate !== 0){
					this.commonInfo = new User(data.rate.cRate,data.rate.list[0],data.rate.list[0].user);
				}
				// this.isLoading = false
			})
			//请求推荐数据
			getRcommend().then(res => {
				this.recommend = res.data.data.list
			})
		},
		destroyed() {
			this.$bus.$off("Listenerimgload",this.listenImg)
		},
		methods: {
			toClick(index) {
				let coffsetTop = this.childrenTop[index]
				this.$refs.scroll.scrollTo(0,-(coffsetTop-38),300)
				// this.$refs.navbar.currentIndex = index
			},
			detailimgload(val) {
				this.$nextTick(() => {
					this.$refs.scroll.refresh();
				})
			},
			lisenerinfoimg() {
				this.$refs.scroll.refresh();
				this.childrenTop = []
				this.childrenTop.push(0)
				this.childrenTop.push(this.$refs.parameter.$el.offsetTop)
				this.childrenTop.push(this.$refs.commonInfo.$el.offsetTop)
				this.childrenTop.push(this.$refs.recommendInfo.$el.offsetTop)
				console.log(this.childrenTop)
				this.$loading.hide()
			},
			scrolly(position) {
				//滚动改变顶部导航选中样式
				let scrollY = -position.y+38
				let topLength = this.childrenTop.length
				for(let i = 0; i < topLength; i++) {
					if((i < topLength-1 && scrollY >= this.childrenTop[i] && scrollY < this.childrenTop[i+1])|| (i == topLength-1 && scrollY >= this.childrenTop[i])){
						this.$refs.navbar.currentIndex = i
					}
				}
				//isShow置顶按钮
				this.isShow  = scrollY > 1500 
			},
			addcarts() {
				let carts = {}
				carts.iid = this.goods.iid
				carts.image = this.bannerList[0]
				carts.title = this.goods.title
				carts.desc = this.goods.desc
				carts.realprice = this.goods.lowNowPrice
				carts.count = 1
				carts.isCheck = true
				//向actions分发
				this.$store.dispatch({
					type:'addcart',
					goodsInfo:carts
				})
				this.$toast.show('成功加入购物车',2000)
				
				localStorage.carts = JSON.stringify(this.$store.state.cartList)
			}
		},
		components: {
			DetailNavBar,
			ScrollView,
			DetailSwiper,
			ShowInfo,
			ShopInfo,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommonInfo,
			DetailRecommend,
			DetailBottomBar
		}	
	}
</script>

<style scoped>
	.main{
		height: 100%;
	}
.nav_bar{
	font-size: 0.32rem;
	color: #000;
	background-color: #fff;
}
.detail_scroll{
	height:calc(100% - 44px - 60px);
	overflow-y: hidden;
}
</style>
