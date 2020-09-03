<template>
	<div class="Mine">
		<nav-bar class="navbar">
			<div slot="center">我的</div>
		</nav-bar>
		<scroll-view class="scroll">
			<login-view />
			<account />
			<func-list :list="list1" />
			<func-list :list="list2" />
		</scroll-view>
		<tabar></tabar>
	</div>
</template>

<script>
	import NavBar from 'components/common/NavBar'
	import tabar from '@/components/tabar'
	import ScrollView from 'components/common/ScrollView'
	import LoginView from './children/LoginView'
	import account from './children/account'
	import funcList from './children/funcList'
	export default {
		name:'mine',
		components: {
			NavBar,
			tabar,
			ScrollView,
			LoginView,
			account,
			funcList
		},
		data() {
			return {
				list1:[
					{iclass:'icon-xiaoxi',title:'我的消息',color:''},
					{iclass:'icon-jifentixicopy',title:'积分商城',color:'#ff0000'},
					{iclass:'icon-huiyuan',title:'会员卡',color:'#ffeb38'}
				],
				list2:[
					{iclass:'icon-gouwuche',title:'购物车',color:'#ff0000'},
					{iclass:'icon-xiazai',title:'下载App',color:'#d015b0'}
				]
			}
		},
		mounted() {
			
		},
		methods: {
		
		}
	}
</script>

<style scoped>
.Mine{
	height: 100%;
	font-size: 0.28rem;
}
.navbar{
	background-color: #ff7d8f;
}
.scroll{
	height: calc(100% - 44px - 49px);
	overflow: hidden;
}
</style>
