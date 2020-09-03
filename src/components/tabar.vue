<template>
	<footer v-show="hidshow">
		<tabar-item path="/home" fontColor="red" >
			<template v-slot:icon>
				<span class="iconfont icon-dianying1"></span>
			</template>
			<template v-slot:text>
				<p>首页</p>
			</template>
			
		</tabar-item>
		<tabar-item path="/category" fontColor="red">
			<template v-slot:icon>
				<span class="iconfont icon-fenlei"></span>
			</template>
			<template v-slot:text>
				<p>分类</p>
			</template>
		</tabar-item >
			<tabar-item path="/carts" fontColor="red">
				<template v-slot:icon>
					<span class="iconfont icon-gouwuche"></span>
				</template>
				<template v-slot:text>
					<p>购物车</p>
				</template>
			</tabar-item >
		<tabar-item path="/mine" fontColor="red">
			<template v-slot:icon>
				<span class="iconfont icon-wode1"></span>
			</template>
			<template v-slot:text>
				<p>我的</p>
			</template>
		</tabar-item>
	</footer>
</template>

<script>
	import tabarItem from 'components/tabar-item'
	export default {
		name:'tabar',
		data() {
			return {
				docmHeight: document.documentElement.clientHeight,  //默认屏幕高度
				showHeight: document.documentElement.clientHeight,   //实时屏幕高度
				hidshow:true  ,//显示或者隐藏footer
				city:'大连'
			}
		},
		mounted() {
		// window.onresize监听页面高度的变化
			  window.onresize = ()=>{
			      return(()=>{
			          this.showHeight = document.body.clientHeight;
			      })()
			  }
			  
		},
		methods:{
		},
		watch: {
			showHeight(newValue, oldValue) {
				 if(this.docmHeight > this.showHeight){
				    this.hidshow=false
				}else{
				    this.hidshow=true
				}
			}
		},
		components:{
			tabarItem
		}
	}
</script>

<style scoped>
	footer{
		width: 100%;
		height: 0.98rem;
		font-size: 0.2rem;
		color: #666;
		text-align: center;
		display: flex;
		/* justify-content: space-between;*/
		align-items: center;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		/* padding:0.2rem 0.3rem; */
		 box-shadow: 0 0 0.2rem 0 #ccc
	}
	footer > .footer_tab{
		flex: 1;
	}
	.footer_tab  span{
		font-size: 0.35rem;
	}
	.footer_tab  p{
		margin-top: 0.1rem;
	}
	/* .footer_tab.router-link-active{
		color: red;
	} */
</style>
