;(function(){

	//每个图片的位置坐标
	var markList = {
		"1" : "0px 0px",
		"2" : "-96px 0px",
		"3" : "-192px 0px",
		"4" : "-288px 0px",
		"5" : "opx -122px",
		"6" : "-96px -122px",
		"7" : "-192px -122px",
		"8" : "-288px -122px"
	}
	//气球函数的构造器
	function Balloon(){

		//4,元素：ele,用来承载气球的dom元素
		this.ele = document.createElement("div");
		this.ele.className = "balloon";
		
		var that = this;
		//console.info(that);

		this.ele.addEventListener("animationend",function(){
			that.birth();
		})
		
		document.body.appendChild(this.ele);
		
		//调用重生方法，精简代码量
		this.birth();
	}
	
	//用构造器+原型的方式去创建气球对象
	Balloon.prototype = {
		constructor:Balloon,
		move:function(){
			//不断地减少y值
			this.y = this.y - this.speed;
			if(this.y < -122){
				//飞出界，要重生
				this.birth();
			}
			else{
				//反馈到dom元素上
			    this.ele.style.top = this.y + "px";
			}
		},
		blow:function(){
			this.ele.className = "balloon baozha";
		},
		birth:function(){
			this.ele.className = "balloon";
			//属性
			//1,分值：（对应不同的背景图），mark
			this.mark = unit.r(1,8);
			//2,速度：speed 让速度与分值成正比
			this.speed = this.mark;
			//3,坐标：x，y 随机的位置
			this.x = unit.r(0,document.body.offsetWidth - 96);
			this.y = document.body.offsetHeight;
			//this.y = 500;
			//根据分值设置背景图
			this.ele.style.backgroundPosition = markList[ this.mark ];
			//反馈到dom元素上
			this.ele.style.left = this.x + "px";
			this.ele.style.top = this.y + "px";
		}
	}
	
	window.Balloon = Balloon;
})();
