<template>
	<div class="detailInfo" v-if="Object.keys(detailInfo).length !== 0">
		<div class="info-title">
			<div class="start"></div>
			<p class="infodetal">{{ detailInfo.desc }}</p>
			<div class="end"></div>
		</div>
		<div class="infokey">{{detailInfo.detailImage[0].key}}</div>
		<div v-for="item in detailInfo.detailImage[0].list" class="infoImgs">
			<img :src="item" alt="" @load="lisenerinfoimg">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailGoodsInfo',
		data() {
			return {
				count:0,
				ImageLength:0
			}
		},
		props: {
			detailInfo: {
				type:Object,
				default() {
					return { }
				}
			}
		},
		mounted() {
			
		},
		methods: {
			lisenerinfoimg() {
				//等待所有图片加载完成后一次性回调，不用重复调用多次,但是还时需要等待事时间
				if(++this.count == this.ImageLength){
					this.$emit('lisenerinfoimg')
				}
			}
		},
		watch:{
			detailInfo(val) {
				this.ImageLength = val.detailImage[0].list.length;
			}
		}
	}
</script>

<style scoped>
.detailInfo{
	font-size: 0.32rem;
}
.info-title{
	padding: 0.3rem 0.4rem;
}
.start{
	width: 2rem;
	height: 0.01rem;
	background: #000;
	position: relative;
}
.start::before{
	content: "";
	display: block;
	width: 0.1rem;
	height: 0.1rem;
	background: #000;
	position: absolute;
	top: -0.1rem;
}
.infodetal{
	margin: 0.23rem 0;
	padding: 0.05rem 0;
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-indent: 0.4rem;
	line-height: 22px;
}
.end{
	width: 2rem;
	height: 0.01rem;
	background: #000;
	position: relative;
	float: right;
}
.end::after{
	content: "";
	display: block;
	width: 0.1rem;
	height: 0.1rem;
	background: #000;
	position: absolute;
	top: -0.1rem;
	right: 0;
}
.infokey{
	padding-left: 0.2rem;
	margin-bottom: 0.2rem;
}
.infoImgs{
	margin-bottom: 0.1rem;
}
.infoImgs, .infoImgs > img{
	width: 100%;
}
</style>