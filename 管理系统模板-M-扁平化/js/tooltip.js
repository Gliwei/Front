/*
	为任意可见元素添加提示信息
	
	node : 需要添加提示信息的元素
	tip  : 提示信息文本 , 不传默认为被提示元素的title标签内容 , title标签内容为空则显示 Nothing
*/
function showTip(node, tip){
	var target	= $(node);
	var tooltip;//提示框
	
	var oldTipFlag = target.attr("flag");//元素上原有的flag
	
	var am;//预定义要执行的动画效果
	
	/*1.保证一个元素上只有一个提示框;
	 *
	 * 如果当前元素的flag属性不为空, 说明此标签已经有了提示框;
	 * 当前元素的提示框已经存在就用原来的框 只是改变提示的内容;
	 * 不存在就新建一个框(也就是在body里加一个div元素);
	 */
	if(oldTipFlag && oldTipFlag!=""){
		//提示框已经存在
		tooltip = $("#tip-"+oldTipFlag+"");
		am = 'tooltip.fadeOut(100, function(){'+
				'$(this).css("display","block").animate({"top":"+=10", "opacity": 0.9}, 100);'+
			 '});';
	}else{
		//提示框不存在
		tooltip = $("<div class='tooltip'></div>");
		var flag = "f"+new Date().getTime();
		target.attr("flag", flag);
		tooltip.attr('id',"tip-"+flag).appendTo("body");
		am = 'tooltip.animate({"top":"+=10", "opacity": 0.9}, 100);';
	}
	
	//2.处理提示框显示内容
	if( !tip || tip=="" ){
		//参数中的tip为空则将提示内容改为标签的title属性
		var title = target.attr("title");
		if(title && title!="") tip = title;
		//如果标签的title属性也没有值,则显示Nothing
		else tip = "!- Nothing -!";
	}

	//为提示框添加内容和样式
	tooltip.css({"opacity":"0.3"}).html(tip);
	
	//3.定义 初始化提示框的方法(主要是对提示框进行定位)
	var init_tooltip = function(){
		//保证提示框不超出浏览器窗口
		if( $( window ).width() < tooltip.outerWidth() * 1.5 )
			tooltip.css("max-width", $( window ).width() / 2 );
		else
			tooltip.css("max-width", 340 );
		
		//指定提示框的显示位置 : left
		var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 );
		var	pos_top	 = target.offset().top - tooltip.outerHeight() - 20;
		
		//确保提示框不超出浏览器窗口
		if( pos_left < 0 ){
			pos_left = target.offset().left + target.outerWidth() / 2 - 20;
			tooltip.addClass("left");
		} else
			tooltip.removeClass("left");

		if( pos_left + tooltip.outerWidth() > $( window ).width() ){
			pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
			tooltip.addClass("right");
		} else
			tooltip.removeClass("right");

		if( pos_top < 0 ){
			var pos_top	 = target.offset().top + target.outerHeight();
			tooltip.addClass("top");
		} else
			tooltip.removeClass("top");

		tooltip.css({"left":pos_left, "top":pos_top});
		eval(am);//执行订花效果
	};
	
	//4.初始化提示框
	init_tooltip();
	//5.浏览器窗口改变大小后重新定位提示框(即重新初始化)
	$(window).resize(init_tooltip);
}

//移除提示框的方法
function removeTip(node){
	var target = $(node);
	var flag = target.attr("flag");
	
	//避免重复移除:如果当前元素的提示框已经被移除则直接返回
	if(!flag || flag=="")return false;
	var tooltip = $("#tip-"+flag+"");
	if(!tooltip || tooltip.length<1) return false;

	tooltip.animate({top:"-=10", opacity:0}, 100, function(){
		$(this).remove();//执行一段动画后 移除本提示框
		target.removeAttr("flag");// 提示框移除后, 删除被提示元素的flag属性
	});
}

//移除指定元素的下的所有提示框
function removeAllTip(node){
	$(node).find("*[flag^=f]").each(function(index, element) {
		removeTip(element);
    });
}