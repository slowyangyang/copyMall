<template>
	<div class="account">
		<div>
			<p class="ac_p"><span class="p_tol">0.00</span>元</p>
			<p>我的余额</p>
		</div>
		<div>
			<p class="ac_p"><span class="p_tol">0</span>个</p>
			<p>我的优惠</p>
		</div>
		<div>
			<p class="ac_p"><span class="p_tol">0</span>分</p>
			<p>我的积分</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'account'
	}
</script>

<style scoped>
.account{
	display: flex;
	text-align: center;
	white-space: nowrap;
	border-bottom: 0.15rem solid #ececec;
}
.account > div{
	flex: 1;
	padding: 0.6rem 0;
	line-height:0.4rem;
	border-right: 0.01rem solid #F6F6F6;
}
.p_tol{
	font-size: 0.4rem;
	color: #ff0000;
}

</style>
