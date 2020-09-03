//每个组件建立一个对应的网络请求文件
import {request1} from './request'

export function getMultiData() {
	return request1({
		url:'/home/multidata'
	})
}

export function getGoodsList(type,page) {
	return request1({
		url:"/home/data?type="+type+"&page="+page
	})
}