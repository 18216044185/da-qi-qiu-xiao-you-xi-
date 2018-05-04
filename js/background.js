;(function(){
	//背景对象
	var background = {
		bgurl:"img/bg.jpg",
		set:function(yourbgurl){
			if(yourbgurl === undefined){
				yourbgurl = this.bgurl
			}
			document.body.style.backgroundImage = "url("+ yourbgurl +")";
		}
	}
	
	window.background = background;
})();
