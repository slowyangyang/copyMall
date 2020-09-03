module.exports = {
	 configureWebpack: {
	    resolve: {
				alias: {
					'components':'@/components',
					'assets':'@/assets'
				}
			}
			// devServer: {//跨域配置
			//     proxy: {
			// 			'/api':{
			// 				target:'https://api.apiopen.top',
			// 				changeOrigin: true,
			// 				pathRewrite:{
			// 					'^/api':'https://api.apiopen.top'
			// 				}
			// 			}
			// 		}
			//   }
			}

}