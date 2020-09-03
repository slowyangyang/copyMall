<template>
	<div class="paranInfo" v-if="Object.keys(paramInfo).length !== 0">
		<table class="infoGoods">
			<tr v-for="tr in paramInfo.rule.tables[0]">
				<td v-for="td in tr">
					{{td}}
				</td>
			</tr>
		</table>
		<table class="goodsInfo">
			<tr v-for="tr in paramInfo.info.set">
				<td>{{ tr.key }}</td>
				<td>{{ tr.value }}</td>
			</tr>
		</table>
		<div class="isImage" v-if="paramInfo.info.images">
			<img :src="paramInfo.info.images[0]" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailParamInfo',
		props: {
			paramInfo: {
				type:Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
.paranInfo{
	font-size: 0.32rem;
	color: #000;
	padding: 0 0.3rem;
	overflow: hidden;
	padding-bottom: 0.4rem;
	border-bottom: 0.15rem solid #ECECEC;
}
table{
	width: 100%;
	border-top: 0.02rem solid #9E9E9E;
	border-bottom: 0.02rem solid #9E9E9E;
	text-align: center;
	line-height: 40px;
	table-layout: fixed;
}
table tr{
	border-bottom: 0.01rem solid #ECECEC;
}
.infoGoods tr td:first-child{
	width: 1rem;
}
.goodsInfo{
	table-layout: fixed;
}
.goodsInfo tr td:first-child{
	width: 1rem;
}
.goodsInfo tr td:last-child{
	color: #ff7272;
	text-align: left;
	padding-left: 0.8rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.isImage img{
	width: 100%;
}
</style>
