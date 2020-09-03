import { request1 } from './request'

export function getDetailData(params) {
	return request1({
		url: '/detail',
		params:params
	})
}

export function getRcommend() {
	return request1({
		url: '/recommend'
	})
}

export class goods {
	constructor(itemInfo,columns,services,iid) {
	    this.title = itemInfo.title
			this.desc = itemInfo.desc
			this.newPrice = itemInfo.price
			this.oldPrice = itemInfo.oldPrice
			this.discount = itemInfo.discountDesc
			this.discountbg = itemInfo.discountBgColor
			this.columns = columns
			this.services = services
			this.realPrice = itemInfo.lowNowPrice
			this.iid = itemInfo.iid
			this.desc = itemInfo.desc
			this.lowNowPrice = itemInfo.lowNowPrice
	}
}

export class shop {
	constructor(shopInfo) {
	    this.logo = shopInfo.shopLogo
			this.name = shopInfo.name
			this.fans = shopInfo.cFans
			this.sells = shopInfo.cSells
			this.scroe = shopInfo.score
			this.goodsCount = shopInfo.cGoods
	}
}

export class User {
	constructor(crate, list, user) {
	    this.crate = crate
			this.logo = user.avatar
			this.uname = user.uname
			this.content = list.content
			this.date = list.created
			this.style = list.style
			this.images = list.images ? list.images : []
	}
}