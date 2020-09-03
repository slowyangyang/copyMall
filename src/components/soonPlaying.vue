<template>
	<ul class="nowPlaying">
		<li>
			<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
			<div class="move_info">
				<h4>无名之辈</h4>
				<p>10999人观看</p>
				<p>主演：<span>陈建兵、任素汐、潘炳龙、士大夫十、似懂非懂、似懂非懂</span></p>
				<p >2020-11-30上映</p>
			</div>
			<button>预告</button>
		</li>
	</ul>
	
</template>

<script>
	export default {
		name:'soonPlaying'
	}
</script>

<style scoped>
ul li{
	width: 100%;
	display: flex;
	align-items: center;
	position: relative;
	padding: 0.3rem 0.2rem;
	border-bottom: 0.01rem solid #ccc;
}
ul li .imgbox{
	width: 1.2rem;
	height: 2rem;
	/* margin-right: 0.2rem; */
}
ul li .imgbox img{
	width: 100%;
	height: 100%;
}
ul li .move_info{
	flex: 1;
	font-size: 0.28rem;
	overflow: hidden;
	line-height: 0.5rem;
	margin: 0 0.2rem;
}
ul li .move_info h4{
	font-size: 0.4rem;
	font-weight: bold;
	/* line-height: 0.4rem; */
}
ul li .move_info p{
	line-height: 0.5rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
ul li button{
	width: 1.2rem;
	height: 0.6rem;
	background: #3794f3;
	font-size: 0.28rem;
	color: #fff;
	border: 0;
	border-radius: 0.06rem;
	/* margin-top: 0.6rem; */
}
</style>