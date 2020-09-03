<template>
	<ul class="nowPlaying">
		<li>
			<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt="" @touchstart="kk"></div>
			<div class="move_info">
				<h4>无名之辈</h4>
				<p>观众评 <span class="score">9.2</span></p>
				<p>主演：<span>陈建兵、任素汐、潘炳龙、士大夫十、似懂非懂、似懂非懂</span></p>
				<p >今天56家影院放映334场</p>
			</div>
			<button>购票</button>
		</li>
		<li>
			<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
			<div class="move_info">
				<h4>无名之辈</h4>
				<p>观众评 <span class="score">9.2</span></p>
				<p>主演：<span>陈建兵、任素汐、潘炳龙、士大夫十、似懂非懂、似懂非懂</span></p>
				<p >今天56家影院放映334场</p>
			</div>
			<button>购票</button>
		</li>
		<li>
			<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
			<div class="move_info">
				<h4>无名之辈</h4>
				<p>观众评 <span class="score">9.2</span></p>
				<p>主演：<span>陈建兵、任素汐、潘炳龙、士大夫十、似懂非懂、似懂非懂</span></p>
				<p >今天56家影院放映334场</p>
			</div>
			<button>购票</button>
		</li>
		<li>
			<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
			<div class="move_info">
				<h4>无名之辈</h4>
				<p>观众评 <span class="score">9.2</span></p>
				<p>主演：<span>陈建兵、任素汐、潘炳龙、士大夫十、似懂非懂、似懂非懂</span></p>
				<p >今天56家影院放映334场</p>
			</div>
			<button>购票</button>
		</li>
		<li>
			<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
			<div class="move_info">
				<h4>无名之辈</h4>
				<p>观众评 <span class="score">9.2</span></p>
				<p>主演：<span>陈建兵、任素汐、潘炳龙、士大夫十、似懂非懂、似懂非懂</span></p>
				<p >今天56家影院放映334场</p>
			</div>
			<button>购票</button>
		</li>
		<li>
			<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
			<div class="move_info">
				<h4>无名之辈</h4>
				<p>观众评 <span class="score">9.2</span></p>
				<p>主演：<span>陈建兵、任素汐、潘炳龙、士大夫十、似懂非懂、似懂非懂</span></p>
				<p >今天56家影院放映334场</p>
			</div>
			<button>购票</button>
		</li>
		<li>
			<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
			<div class="move_info">
				<h4>无名之辈</h4>
				<p>观众评 <span class="score">9.2</span></p>
				<p>主演：<span>陈建兵、任素汐、潘炳龙、士大夫十、似懂非懂、似懂非懂</span></p>
				<p >今天56家影院放映334场</p>
			</div>
			<button>购票</button>
		</li>
		<li>
			<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
			<div class="move_info">
				<h4>无名之辈</h4>
				<p>观众评 <span class="score">9.2</span></p>
				<p>主演：<span>陈建兵、任素汐、潘炳龙、士大夫十、似懂非懂、似懂非懂</span></p>
				<p >今天56家影院放映334场</p>
			</div>
			<button>购票</button>
		</li>
		<li>
			<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
			<div class="move_info">
				<h4>无名之辈</h4>
				<p>观众评 <span class="score">9.2</span></p>
				<p>主演：<span>陈建兵、任素汐、潘炳龙、士大夫十、似懂非懂、似懂非懂</span></p>
				<p >今天56家影院放映334场</p>
			</div>
			<button>购票</button>
		</li>
		<li>
			<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
			<div class="move_info">
				<h4>无名之辈</h4>
				<p>观众评 <span class="score">9.2</span></p>
				<p>主演：<span>陈建兵、任素汐、潘炳龙、士大夫十、似懂非懂、似懂非懂</span></p>
				<p >今天56家影院放映334场</p>
			</div>
			<button>购票</button>
		</li>
		<li>
			<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
			<div class="move_info">
				<h4>无名之辈</h4>
				<p>观众评 <span class="score">9.2</span></p>
				<p>主演：<span>陈建兵、任素汐、潘炳龙、士大夫十、似懂非懂、似懂非懂</span></p>
				<p >今天56家影院放映334场</p>
			</div>
			<button>购票</button>
		</li>
	</ul>
</template>

<script>
	export default {
		name:'NowPlaying',
		methods:{
			kk(){
				console.log(999)
			}
		}
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
ul li .move_info p .score{
	font-size: 0.3rem;
	color: coral;
}
ul li button{
	width: 1.2rem;
	height: 0.6rem;
	background: orangered;
	font-size: 0.28rem;
	color: #fff;
	border: 0;
	border-radius: 0.06rem;
	/* margin-top: 0.6rem; */
}
</style>
