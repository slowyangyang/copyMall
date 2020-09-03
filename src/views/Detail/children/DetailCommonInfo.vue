<template>
	<div>
		<div class="commonInfo" v-if="Object.keys(commonInfo).length !== 0">
			<div class="info_title">
				<span>用户评价 <i>{{ commonInfo.crate }}+</i></span>
				<span>更多</span>
			</div>
			<div class="uer_common">
				<div class="user_info">
					<img :src="commonInfo.logo" alt="">
					<span>{{ commonInfo.uname }}</span>
				</div>
				<p class="info_content">{{ commonInfo.content }}</p>
				<div class="info_style">
					<span>{{ commonInfo.date|formdate }}</span>
					<span>{{ commonInfo. style }}</span>
				</div>
			</div>
			<div class="common_img" v-if="commonInfo.images.length">
				<div v-for="item in commonInfo.images" class="imgs">
					<img :src="item" alt="">
				</div>
			</div>
		</div>
		<div class="no_info" v-else>暂无评论</div>
	</div>
</template>

<script>
export default {
	name: 'DetailCommonInfo',
	props: {
		commonInfo: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	filters: {
		formdate(val) {
			let date = new Date(val*1000)
			let year = date.getFullYear()
			let month = date.getMonth()+1
			let day = date.getDate()
			date = year+'-'+month+'-'+day
			return date
		}
	}
}
</script>

<style scoped>
.commonInfo{
	font-size: 0.28rem;
	padding: 0 0.3rem;
	padding-bottom: 0.2rem;
	border-bottom: 0.15rem solid #ECECEC;
}
.info_title{
	font-size: 0.3rem;
	display: flex;
	justify-content: space-between;
	line-height: 1rem;
	border-bottom: 0.01rem solid #E0DFDF;
	padding: 0 0.15rem;
}
.info_title span i{
	font-size: 0.26rem;
}
.user_info img{
	width: 0.8rem;
	height: 0.8rem;
	border-radius: 50%;
	vertical-align: middle;
	margin: 0.2rem 0;
	margin-right: 0.2rem;
}
.uer_common{
	margin-bottom: 0.15rem;
}
.info_content{
	line-height: 20px;
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	margin-bottom: 0.15rem;
}
.info_style{
	margin-bottom: 0.15rem;
}
.info_style span{
	color: #9E9E9E;
	margin-right: 0.3rem;
}
.common_img{
	display: flex;
}
.imgs{
	width: 1.5rem;
	height: 1.5rem;
	margin-right: 0.15rem;
	overflow: hidden;
}
.imgs img{
	width: 100%;
}
.no_info{
	text-align: center;
	font-size: 0.28rem;
	line-height: 50px;
}
</style>
