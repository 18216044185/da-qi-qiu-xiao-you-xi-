;(function(){
	//云朵对象
	function Cloud(){
		//ele
		this.ele = document.createElement("div");
		this.ele.className = "cloud";
		document.body.appendChild(this.ele);
		
		this.birth();
	}
	Cloud.prototype = {
		constructor:Cloud,
		move:function(){
			if(this.x < - this.w){
				//console.info("重生。。。。。。。。");
				this.birth();
			}
			else{
				this.x = this.x - this.speed;
			    this.ele.style.left = this.x + "px";
			}
		},
		birth:function(){
			//随机的坐标
			this.x = unit.r(document.body.offsetWidth,document.body.offsetWidth+10);
			this.y = unit.r(10,250);
			this.ele.style.left = this.x + "px";
			this.ele.style.top = this.y + "px";
			//随机的宽高
			this.w = unit.r(80,180);
			this.ele.style.width = this.w + "px";
			this.ele.style.height = this.w/2 + "px";
			
			//向左移动随机的速度
			this.speed = unit.r(2,5);
		}
	}
	
	window.Cloud = Cloud;
})();
