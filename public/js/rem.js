
        // window.onload = function(){
        //     getRem(720,100)
        // };
        // window.onresize = function(){
        //     getRem(720,100)
        // };
        // function getRem(pwidth,prem){
        //     var html = document.getElementsByTagName("html")[0];
        //     var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
        //     html.style.fontSize = oWidth/pwidth*prem + "px";
        // }
        
        //小米官网的写法
        !function(n){
            var  e=n.document,
                 t=e.documentElement,
                 i=750,
                 d=i/100,
                 o="orientationchange"in n?"orientationchange":"resize",
                 a=function(){
                     var n=t.clientWidth||320;n>720&&(n=750);
                     t.style.fontSize=n/d+"px"
                 };
                 e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))
        }(window);