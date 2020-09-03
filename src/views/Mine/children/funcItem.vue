<template>
	<div class="funitem">
		<i class="iconfont" :class="item.iclass" :style="{color:item.color}"></i>
		<span>{{item.title}}</span>
	</div>
</template>

<script>
	export default {
		name: 'funcItem',
		props:['item']
	}
</script>

<style scoped>
.funitem{
	/* padding: 0.15rem 0 0.15rem 0.2rem; */
	display: flex;
	align-items: center;
	padding-left: 0.3rem;
}
.funitem i{
	margin-right: 0.2rem;
	font-size: 0.35rem;
}
.funitem span{
	flex: 1;
	border-bottom: 0.01rem solid #F6F6F6;
	padding: 0.3rem 0 ;
}
</style>
