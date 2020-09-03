<template>
	<div style="overflow: hidden;">
		<div class="query_head">
			<span class="iconfont icon-sousuo1"></span>
			<input type="text">
		</div>
		<div class="query_body">
			<div class="query_title">电影/电视剧/综艺</div>
			<div class="query_list">
				<ul class="nowPlaying">
					<li>
						<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
						<div class="move_info">
							<h4>无名之辈</h4>
							<p>A Cool Fish</p>
							<p>剧情 喜剧 犯罪</span></p>
							<p >2020-11-30</p>
						</div>
						<div class="pf">8.5</div>
					</li>
					<li>
						<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
						<div class="move_info">
							<h4>无名之辈</h4>
							<p>A Cool Fish</p>
							<p>剧情 喜剧 犯罪</span></p>
							<p >2020-11-30</p>
						</div>
						<div class="pf">8.5</div>
					</li>
					<li>
						<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
						<div class="move_info">
							<h4>无名之辈</h4>
							<p>A Cool Fish</p>
							<p>剧情 喜剧 犯罪</span></p>
							<p >2020-11-30</p>
						</div>
						<div class="pf">8.5</div>
					</li>
					<li>
						<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
						<div class="move_info">
							<h4>无名之辈</h4>
							<p>A Cool Fish</p>
							<p>剧情 喜剧 犯罪</span></p>
							<p >2020-11-30</p>
						</div>
						<div class="pf">8.5</div>
					</li>
					<li>
						<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
						<div class="move_info">
							<h4>无名之辈</h4>
							<p>A Cool Fish</p>
							<p>剧情 喜剧 犯罪</span></p>
							<p >2020-11-30</p>
						</div>
						<div class="pf">8.5</div>
					</li>
					<li>
						<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
						<div class="move_info">
							<h4>无名之辈</h4>
							<p>A Cool Fish</p>
							<p>剧情 喜剧 犯罪</span></p>
							<p >2020-11-30</p>
						</div>
						<div class="pf">8.5</div>
					</li>
					<li>
						<div class="imgbox"><img src="../../public/img/wmzb.jpg" alt=""></div>
						<div class="move_info">
							<h4>无名之辈</h4>
							<p>A Cool Fish</p>
							<p>剧情 喜剧 犯罪</span></p>
							<p >2020-11-30</p>
						</div>
						<div class="pf">8.5</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Query'
	}
</script>

<style scoped>
.query_head{
	height: 1.2rem;
	background: #ececec;
	position: relative;
	text-align:center;
	display: flex;
	align-items: center;
	justify-content: center;
	
}
.query_head input{
	width: 95%;
	height: 0.7rem;
	text-indent: 0.7rem;
	border: 0;
	border-radius: 0.5rem;
	font-size: 0.28rem;
}
.query_head span{
	position: absolute;
	left: 0.5rem;
}
.query_body{
	/* flex: 1; */
	display: flex;
	flex-direction: column;
	overflow: hidden;
}
.query_body .query_title{
	height: 0.8rem;
	border-bottom: 0.01rem solid #ccc;
	padding-left:0.2rem;
	line-height: 0.8rem;
	font-size: 0.28rem;
}
.query_body .query_list{
	height: 100%;
	flex: 1;
	overflow: auto;
}
.query_body ul li{
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
ul li .pf{
	font-size: 0.4rem;
	color: orange;
}
</style>