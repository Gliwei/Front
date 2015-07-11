// JavaScript Document
$(document).ready(function(e) {
	$(".foldReply").click(function(e) {//收起回复 or 展开回复 的监听
		var foldReply = $(this);//展开、收起按钮
		var replys = foldReply.parent().find(".replys");//回复显示区域
		//alert(replys.is(":visible"));
		if(replys.is(":visible")){//判断回复区是否已显示
				replys.slideUp(300,function(){//未显示则显示
					foldReply.removeClass("up").html("回复");//并替换css和文本	
				});
				
			} else {
				//alert($("ul.replyList").find("li").length);
				var flog = $("ul.replyList").find("li").length;
				if(flog == 0){//判断所加载的回复列表是否为空
					replys.find("span.tip").css("display","none");
					replys.find("span.say").css("display","none");
					replys.find(".text").show(0);//为空i直接显示回复输入框
				}
				foldReply.addClass("up").html("收起回复");//不为空则显示他
				replys.slideDown(300);
			};
    });
	$("#upAll").click(function(e) {//收起全部回复 or 展开全部回复
		var foldReply = $(".foldReply");
		var replys = $(".replys");
        if(replys.is(":visible")){
			replys.slideUp(300,function(){
			foldReply.removeClass("up").html("回复");	
				$("#upAll").html("展开回复");
			});			
		} else {
			foldReply.addClass("up").html("收起回复");
			$("#upAll").html("收起回复");
			replys.slideDown(300);
		};
		
    });
	$(".replys .list").load("replyList.html");//加载回复列表
});