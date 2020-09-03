export default function(el,callback) {
	var timeOutEvent=0;//定时器
	for(let i = 0;i < el.length; i++){
		//手指开始按时设置定时器，超过500毫秒就执行longPress()
    el[i].addEventListener('touchstart',function(e){
			timeOutEvent = setTimeout(callback,500);
			e.preventDefault();
		},false)
		 //如果手指滑动只是说明用户不想长按只想滑动，所以要取消定时器,并还原，
       //如果不还原的话，返回的定时器的值都会是不同的
		el[i].addEventListener('touchmove',function(e){
				clearTimeout(timeOutEvent);
				timeOutEvent = 0;
		},false)
    //长按没有超过500毫秒，手指离开，执行点击事件，取消定时器    
		el[i].addEventListener('touchend',function(e){
			clearTimeout(timeOutEvent);
			if(timeOutEvent!=0){
				//执行点击事件的行为
				// console.log('this is click');
			}
			return false;
		},false)
		
	}
	
}
