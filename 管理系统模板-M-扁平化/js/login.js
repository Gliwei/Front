// JavaScript Document
$(function(){
	var success = function(callback){
		$(".shadow").fadeOut(300);
		$(".loginBox").animate({top:-80,opacity:0},300,function(){
				callback();
		});
	};


	loginBoxAnimate();
	
	$(".content input").focus(function(){
		removeTip($(this));
		addTip($(this),"用户不存在");
	});

	$("#name").keydown(function(e){
		// console.info(e.keyCode);
		if(e.keyCode==13){
			$("#password").focus();	
		}
	});

	$("#password").keydown(function(e){
		// console.info(e.keyCode);
		if(e.keyCode==13){
			$(".submitBtn").click();	
		}
	});

	$(".submitBtn").click(function(e) {
		success(function(){
			window.location = "index.html";
			// window.location = "login.html";
		});        
    });
	
});

// 登陆界面动画效果
function loginBoxAnimate(){
	//box下坠动画	
	$(".loginBox").css({position:'relative',top:-700}).animate({top:20},450,function(){
		$(this).animate({top:-10},200).animate({top:0},200);	
	});
	
	var form = $(".content form");
	var top = (form.height()+30)*-1;
	//form下坠动画
	form.css({position:'relative',top:top}).animate({top:10},560,function(){
		//需要在下坠完成后执行的一些方法
		$(".content").css("overflow","visible");//设置content超出可见
	});	

	//阴影上浮动画
	$(".shadow").css({position:'relative',top:80}).animate({top:0},500);
}

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