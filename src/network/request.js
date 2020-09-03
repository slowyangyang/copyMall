//封装axios作为中间件
//引入axios
import axios from 'axios'
export function request1(config){
	//1。创建axios实例
	const instance = axios.create({
		//基本参数
		baseURL:'http://152.136.185.210:8000/api/z8',
		timeout:5000
	})
	//2.设置拦截器
	//请求拦截
	//可以在拦截时对请求信息进行设置
	axios.interceptors.request.use(
	config => {
		return config//必须返回
	},err => {
		console.log(err);
	})
	// 响应拦截
	axios.interceptors.response.use(
		response => {
			return response
	},err => {
		console.log(err);
	})
	//3。返回instancePromise对象
	return instance(config)
}