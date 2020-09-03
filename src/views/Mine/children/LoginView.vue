<template>
	<div class="login_box">
		<div class="box_left">
			<div class="imgbox">
				<i class="iconfont icon-weidenglu-touxiang"></i>
			</div>
			<div>
				<p class="tologin">
					<span @click="login">登录</span>/<span @click="register">注册</span>
				</p>
				<p><i class="iconfont icon-shouji"></i>暂无绑定手机号</p>
			</div>
		</div>
		<i class="iconfont icon-xiangyou"></i>
	</div>
</template>

<script>
	export default {
		name: 'LoginView',
		methods: {
			login() {
				this.$router.push('/login')
			},
			register() {
				this.$router.push('/register')
			}
		}
	}
</script>

<style scoped>
.login_box{
	padding: 0.1rem 0.2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	background: #ff7d8f;
}
.box_left{
	flex: 1;
	display: flex;
	align-items: center;
}
.mores{
	width: 0.3rem;
}
.imgbox{
	width: 1.5rem;
	height: 1.5rem;
	margin-right: 0.1rem;
	line-height: 1.5rem;
}
.imgbox i{
	font-size: 1.3rem;
}
.tologin{
	font-size: 0.35rem;
	margin-bottom: 0.1rem;
}
.icon-shouji{
	font-size: 0.3rem;
}
</style>
