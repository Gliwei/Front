// JavaScript Document
$(function(){
	$("body").hide(0).fadeIn(900);
	$(".menu-tit[current=true]").siblings("li").slideDown(300);
	$(".menu-tit").click(function(e) {
		if($(this).attr("current")=="false"){
			$(".menu-tit[current=true]").attr("current","false").siblings("li").slideUp(300);
        	$(this).attr("current","true").siblings("li").slideDown(300);
		}
    });
	var navIsShow = true;
	var leftW = 220;
	$("#full-screen").click(function(){
		var ths = $(this);
		if(navIsShow){
			$("#left").animate({"width":0},300).find("ul").slideUp(200);
			$("#right").animate({"margin-left":0},300,function(){
				ths.find("i").removeClass().addClass("icon-chevron-sign-right");
				navIsShow = false;
			});
		}else{
			$("#left").animate({"width":leftW},300,function(){
				$(this).find("ul").slideDown(200);
			});
			$("#right").animate({"margin-left":leftW},300,function(){
				ths.find("i").removeClass().addClass("icon-chevron-sign-left");
				navIsShow = true;
			});
		}
	});
});
function hideMenu(){
	$("#left").animate({width:0},300);
}
function loadPage(url,node){
	$.get(url,function(result){
		//alert(result);
		$("#right .r-cnt").html(result);
		$("#left li i").css("color","inherit");
		$(node).find("i").css("color","blue");
	},"html");
}