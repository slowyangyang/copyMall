import Vue from 'vue'
import msgBox from './msgBox'
export const msgbox =  (function() {
  return function(options) {
    let defaults = { //默认参数
      title:'',
      content:'',
      cancel:'',
      ok:'',
      cancelHandel:null,
      okHandel:null
    }
    //创建组件构造器
    let mesboxconstructor = Vue.extend(msgBox)
    //替换默认参数
    Object.assign(defaults,options)
    //将data和方法与模板对象结合
    let msgbox = new mesboxconstructor({
      data: {
          title: defaults.title,
          content:defaults.content,
          cancel: defaults.cancel,
          ok: defaults.ok,
      },
      methods: {
        cancelHandel() {
          defaults.cancelHandel && defaults.cancelHandel.call(this)
          document.body.removeChild(this.$el)
        },
        okHandel() {
          defaults.okHandel && defaults.okHandel.call(this)
          document.body.removeChild(this.$el)
        }
      }
    })
    //将mesbox组件挂载到创建的标签中
    msgbox.$mount(document.createElement('div'))
    //加入body中
    document.body.appendChild(msgbox.$el)
  } 
})()