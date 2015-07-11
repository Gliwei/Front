// JavaScript Document
$(function(){
	var success = function(callback){
		$(".shadow").fadeOut(300);
		$(".loginBox").animate({top:-50,opacity:0},300,function(){
				callback();
		});
	};
	var form = $(".content form");
	var top = (form.height()+30)*-1;
	form.css({position:'relative',top:top});
	//form下坠动画
	form.animate({top:10},700,function(){
		//需要在下坠完成后执行的一些方法
		$(".content").css("overflow","visible");//设置content超出可见
	});	
	//box下坠动画	
	$(".loginBox").animate({top:20},500).animate({top:-10},200).animate({top:0},200);
	//阴影上浮动画
	$(".shadow").animate({top:0},500);
	$(".otherInfo").fadeIn(800);//显示版本及其他信息
	
	$(".content input").focus(function(){
		removeTip($(this));
		addTip($(this),"此用户不存在");
	});
	$(".submitBtn").click(function(e) {
		success(function(){
			window.location = "new-index.html";	
		});        
    });
	
});

//添加提示信息
function addTip(ele,content){
	var tip = $("<div></div>");
	tip.css("display","none").addClass("tip").append(content).append("<span class='arr'></span>");
	$(ele).parent().append(tip.fadeIn(300));	
}
//移除提示信息
function removeTip(ele){
	$(ele).parent().find(".tip").fadeOut(300,function(){
		$(this).remove();
	});
}