import {debounce} from '@/common/untils'
import backUp from '@/components/content/backUp'
import { getGoodsList } from '@/network/cinema'
export const ListenerImgMixin = {
	data() {
		return {
			listenImg:null,
			refresh:null
		}
	},
	mounted() {
		//事件总线监听图片加载完成事件
		this.refresh = debounce(this.$refs.scroll.refresh,50)
		//scroll滚动性能优化
		this.listenImg = () => { 
			this.refresh() 
			}
		this.$bus.$on("Listenerimgload",this.listenImg)
	}
}

export const backTopMixin = {
	data() {
		return {
			isShow:false
		}
	},
	methods: {
		backclick() {
			this.$refs.scroll.scrollTo(0,0,200)
		}
	},
	components: {
		backUp
	}
}