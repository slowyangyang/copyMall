
<template>
	<router-link class="footer_tab" :to="path" tag="div" :style="changeActive">
		<div>
			<slot name="icon"></slot>
		</div>
		<div>
			<slot name="text"></slot>
		</div>
	</router-link>
</template>

<script>
	export default {
		name:'tabar_item',
		props: {
			path:{
				type:[String,Object]
			},
			fontColor:{
				type:String,
				default:'red'
			}
		},
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) !== -1;
			},
			changeActive() {
				return this.isActive ? {color:this.fontColor} : {}
			}
		}
	}
	
	
</script>

<style scoped>
	.footer_tab{
		flex: 1;
	}
	.footer_tab  span{
		font-size: 0.35rem;
	}
	.footer_tab > p{
		margin-top: 0.1rem;
		color: #0077AA;
	}
	/* .router-link-active{
		color: blue;
	} */
</style>
