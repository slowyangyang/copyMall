<template>
	<div>
		<!-- <div v-if="cartList.length == 0"> -->
			<div class="cartitem" v-for="(item,index) in cartList" ref='caritem'>
				<div class="check">
					<i class="iconfont icon-duigou" 
							:class="{active:item.isCheck}"
							@touchstart="changeCheck(index)"
								></i>
				</div>
				<div class="imgbox">
					<img :src="item.image" alt="">
				</div>
				<div class="itemInfo">
					<div>
						<p class="info_title">{{item.title}}</p>
						<p class="info_desc">{{item.desc}}</p>
					</div>
					<div class="info_bottom">
						<span class="info_price">{{item.realprice}}</span>
						<div class="socol">
							<button
								class="race" 
								@touchstart="sub(index)">-</button>
							<span>{{item.count}}</span>
							<button @touchstart="add(index)">+</button>
						</div>
					</div>
				</div>
				<div class="itemdel" v-if="isdel" click.stop='hideitem'>
					<p @click.stop="del(index)">删除</p>
				</div>
			</div>	
		<!-- </div> -->
		<!-- <div class="else" v-else>购物车空了，赶快去添加吧！</div> -->
	</div>
		
	
</template>

<script>
	import continuClick from '@/common/delayClick'
	export default {
		name: 'CartItem',
		props:{
			cartList: {
				type:Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				isdel:false
			}
		},
		mounted() {
			if(this.$store.state.cartList.length) {
				continuClick(this.$refs.caritem,this.comeon)
			}
		},
		methods: {
			changeCheck(index) {
				this.cartList[index].isCheck = !this.cartList[index].isCheck
			},
			add(index) {
				this.$store.commit("addcount",index)
			},
			sub(index) {
				if(this.$store.state.cartList[index].count <= 1) return
				this.$store.commit("subcount",index)
			},
			comeon() {
				this.isdel = true;
			},
			del(index) {
				console.log(1);
				this.$store.commit('delcartlist',index)
				this.isdel = false
			},
			hideitem(e) {
				console.log(2);
				this.isdel = false
				return 
			}
		},
		computed: {
			isdisd() {
				return function(index) {
					return !(this.$store.state.cartList[index].count < 1)
				}
				
			}
		}
	}
</script>

<style scoped>
.cartitem{
	height: 2rem;
	display: flex;
	align-items: center;
	background-color: #fff;
	padding: 0.2rem;
	font-size: 0.3rem;
	border-bottom: 0.01rem solid #ECECEC;
	position: relative;
}
.imgbox{
	width: 1.2rem;
	height:100%;
	border-radius: 0.06rem;
	margin-right: 0.2rem;
}
.imgbox img{
	width: 100%;
	height: 100%;
}
.itemInfo{
	height: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
	
}
.info_title{
	margin-bottom: 0.3rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.check{
	width: 0.4rem;
	height: 100%;
	margin-right: 0.1rem;
	position: relative;
}
.check i{
	font-size: 0.4rem;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	color:#E0DFDF;
}
.check i.active{
	color:#F2270C;
}
.info_desc{
	width: 100%;
	font-size: 0.23rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.info_price{
	font-size: 0.4rem;
	color: #F2140C;
}
.info_bottom{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.socol > button{
	width: 0.5rem;
	height: 0.5rem;
}
.socol span{
	width: 0.4rem;
	display: inline-block;
	text-align: center;
}
.itemdel{
	width: 100%;
	height: 100;
	font-size: 0.5rem;
	color: #fff;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.3);
	text-align: center;
}
.itemdel p{
	display: block;
	width: 1.5rem;
	height: 1.5rem;
	line-height: 1.4rem;
	margin: 0.25rem auto;
	border-radius: 50%;
	background: red;
}
</style>
