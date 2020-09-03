import loading from './Loading'
let obj = {}
//use插件会暴露出一个install方法
obj.install = function(Vue,options) {
	//组件构造器构造一个laoding对象
	let loadconstructor = Vue.extend(loading)
	//创建实例模板
	let load = new loadconstructor()
	//挂载到某个元素上
	load.$mount(document.createElement('div'))
	//追加到dom中
	document.body.appendChild(load.$el);
	//创造全局对象
	Vue.prototype.$loading = load
}

export default obj