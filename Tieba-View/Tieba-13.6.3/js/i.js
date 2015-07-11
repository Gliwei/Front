// JavaScript Document
$(document).ready(function(e) {
	$("#left").load("topic-list.html",function(){
		$(this).find("ul#list > li:even").addClass("even");
   		$(this).find("ul#list > li:odd").addClass("odd");
		
		var callback = function(){
			var delay;
			$("ul.unfold li").hover(function(){
				var _this = this;
				//不是当前行
				//alert($(this).attr("current")==false);
				if($(this).attr("current")=="false"){
					delay = setTimeout(function(){				
						$(_this).animate({height:40},200);
					},5);
				}
			},function(){
				if($(this).attr("current")=="false"){
					clearTimeout(delay);
					$(this).animate({height:30},300);
				}
			}).click(function(e) {
				if($(this).attr("current")=="false"){
					$("ul.unfold li[current=true]").animate({height:30},300).attr("current",false);;
					$(this).animate({height:300},300);
					$(this).attr("current",true);
				}
            });
		};
		var count = 0;
		var timer = setInterval(function(){
			$("ul.unfold > li").attr("current",false);
			//$("ul").append($("<li>Text"+count+"</li>").animate({left:0,width:1000},1000));
			$("ul.unfold > li").eq(count).show(100).animate({left:0,width:753},500);
			if((++count)>$("ul.unfold > li").size()){
				clearInterval(timer);
				callback();
			}
		},150);	
	});
	
	$("#right").load("info.html",function(){
			
	});
	//导航栏的单击事件
	$("#menus li").click(function(e) {
		var index = $(this).index();
		var leftNum = index*140;
        $(".menu-bg").animate({left:leftNum});
		
		if(index == 2) {
			$("#left").load("remark-list.html",function(){
					
			});
		}
    });
	$(".show-form").click(function(e) {
        $("#bottom form").slideToggle(300);
    });
	/*
	$("#right").hover(function(){
		$(this).css({'z-index':'30'});	
	}, function(){
		$(this).css({'z-index':'10'});
	});*/
	$(window).scroll(function(e) {
		s();
	});
});
function showLogin(){
	if($("#login-wrap .login").length > 0){
		$("#mask").fadeIn(200, function(){
			$("#login-wrap").fadeIn(300)
				.find("#uname").focus();
		});
	} else {
		$("#login-wrap").load("login.html",function(){
			$("#mask").fadeIn(200, function(){
				$("#login-wrap").fadeIn(300).focus()
					.find("#uname").focus();	
			});	
		});		
	}
}
function hideLogin(){
	$("#login-wrap").fadeOut(200,function(){
		$("#mask").fadeOut(200);
	});
}
var flag = true;
function big(cnode){
	if(flag){
		$("#left").css({'position':'relative','z-index':60}).animate({width:998},"fast",function(){
			$(cnode).removeClass("rbtn").addClass("lbtn");
			s();
		});
		flag = false;
	} else {
		$("#left").animate({width:763},"fast",function(){
			$(cnode).removeClass("lbtn").addClass("rbtn");
			s();
		});
		flag = true;
	}
}
function s(){
	var scrollTop = $(document).scrollTop();//滚动条距离网页顶部的高度
	if(scrollTop > 150){
		$("#left .header").css({'position':'fixed','top':'0','opacity':'0.9','width':function(){
			return $(this).parent().width()-20;	
		}});
	} else {
		$("#left .header").css({'position':'relative','top':'0','opacity':'1','width':function(){
			return $(this).parent().width()-20;	
		}});
	}
}
var ydf = true;
function yd(node){
	var pnode = $(node).parent().parent();
	if(ydf){
		pnode.find(".msg-cnt").slideUp(200,function(){
			pnode.animate({right:-140},"fast");
		})
		ydf = false;
	} else {
		pnode.animate({right:0},"fast",function(){
			pnode.find(".msg-cnt").slideDown(200);
		});
		ydf = true;
	}
}
/*****************************************************************/
function sayClick(node){
	$(node).parent().find(".textbox").width(function(){
		return $(this).width();
		}).slideToggle(300,function(){
		$(this).width('100%');
		});
}
function fold(node){
	foldBtn = $(node);
	var reply = foldBtn.parent().parent().find(".reply");
	if(reply.is(":visible")){//判断回复区是否已显示
		reply.slideUp(300,function(){//已显示则收起
			foldBtn.addClass("up").html("回复(n)");//并替换css和文本	
		});
	} else {
		foldBtn.removeClass("up").html("收起回复");//未显示则显示
		reply.slideDown(300);
	};
}