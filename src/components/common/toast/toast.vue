<template>
	<div class="Toast" v-show="isShow">
		{{message}}
	</div>
</template>

<script>
	export default {
		name: 'toast',
		data() {
			return {
				message:'',
				isShow:false
			}
		},
		methods: {
			show(msg,duration=2000) {
				this.message = msg
				this.isShow = true
				setTimeout(() => {
					this.isShow = false
				},duration)
			}
		}
	}
</script>

<style scoped>
.Toast{
	font-size: 0.3rem;
	color: #fff;
	background-color: rgba(0,0,0,0.5);
	padding: 0.2rem 0.4rem;
	border-radius: 0.15rem;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	z-index: 999;
}
</style>
