<template>
	<div class="city">
		<div class="city_left">
			<div class="hotCity">
				<h4>热门城市</h4>
				<ul class="hotCity_list">
					<li>上海</li>
					<li>北京</li>
					<li>广州</li>
					<li>深证</li>
					<li>重庆</li>
					<li>成都</li>
					<li>安顺</li>
				</ul>
			</div>
			<div class="cityList">
				<ul>
					<li>
						<h4>A</h4>
						<p>阿拉善盟</p>
						<p>安阳</p>
						<p>安庆</p>
					</li>
					<li>
						<h4>A</h4>
						<p>阿拉善盟</p>
						<p>安阳</p>
						<p>安庆</p>
					</li>
					<li>
						<h4>A</h4>
						<p>阿拉善盟</p>
						<p>安阳</p>
						<p>安庆</p>
					</li>
					<li>
						<h4>A</h4>
						<p>阿拉善盟</p>
						<p>安阳</p>
						<p>安庆</p>
					</li>
					<li>
						<h4>A</h4>
						<p>阿拉善盟</p>
						<p>安阳</p>
						<p>安庆</p>
					</li>
					<li>
						<h4>A</h4>
						<p>阿拉善盟</p>
						<p>安阳</p>
						<p>安庆</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="cityIndex">
			<div>
				<p>A</p>
				<p>B</p>
				<p>C</p>
				<p>D</p>
				<p>E</p>
				<p>F</p>
				<p>G</p>
				<p>H</p>
				<p>I</p>
				<p>J</p>
				<p>K</p>
				<p>L</p>
				<p>M</p>
				<p>N</p>
				<p>O</p>
				<p>P</p>
				<p>Q</p>
				<p>R</p>
				<p>S</p>
				<p>T</p>
				<p>U</p>
				<p>V</p>
				<p>W</p>
				<p>X</p>
				<p>Y</p>
				<p>Z</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'City'
	}
</script>

<style scoped>
.city{
	display: flex;
	position: relative;
	height: 100%;
}
.city_left{
	flex: 1;
	background:pink;
	font-size: 0.32rem;
	overflow: auto;
}
.city_left h4{
	height: 0.5rem;
	line-height: 0.5rem;
	text-indent: 0.2rem;
	background:#ff6a6a;
}
.hotCity{
	margin-top: 0.3rem;
}
.hotCity .hotCity_list::after{
	content: "";
	display: block;
	height: 0;
	clear: both;
	zoom: 1;
}
.hotCity .hotCity_list li{
	width: 1.5rem;
	height: 0.5rem;
	background: #fff;
	border-radius: 0.05rem;
	float: left;
	margin: 0.3rem 0.2rem 0.3rem 0.4rem;
	text-align: center;
	line-height: 0.5rem;
}
.cityList ul li p{
	line-height: 0.55rem;
	text-indent: 0.2rem;
}
.cityIndex{
	position: relative;
	width: 0.6rem;
	font-size: 0.3rem;
}
.cityIndex > div{
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content:center;
	text-align: center;
}
.cityIndex > div P{
	height: 0.36rem;
}
</style>
