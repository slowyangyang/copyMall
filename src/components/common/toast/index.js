import Toast from './toast'
let obj = {}
obj.install = function(Vue) {
	//封装插件：模板和插件对象
	//1.使用组件构造器，构建出插件模板
	const toastconstructor = Vue.extend(Toast)
	
	//2.new出插件对象
	const toast = new toastconstructor()
	
	//3.将其手动挂载到某一个元素上
	toast.$mount(document.createElement('div'))
	
	//4.最后将模板追加到dom上
	document.body.appendChild(toast.$el)
	
	//将插件对象加入Vue原型上，全局使用
	Vue.prototype.$toast = toast;
	
}
export default obj