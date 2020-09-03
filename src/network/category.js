import { request1 } from './request'

export function category() {
	return request1({
		url:'/category'
	})
}

export function subcategory(maitKey) {
	return request1({
		url:'/subcategory?maitKey='+maitKey,
	})
}

export function subcategorydetail(miniwallkey,type) {
	return request1({
		url:'/subcategory/detail',
		params:{
			miniWallkey:miniwallkey,
			type:type
		}
	})
}