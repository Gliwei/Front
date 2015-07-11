// JavaScript Document
function modifyWidth(){
	var w = $("#w").val();
	$("div.base").animate({"width":w},300);
}
$(function(){
	$(window).scroll(function(e) {
		var fixedNode = $(".nav .inner");//需要浮动的元素节点
		var scrollTop = $(window).scrollTop();
		var headerHight = $(".header").height();
		
		$("#test").html("scrollTop:"+scrollTop+" | headerHight"+headerHight);
		if(scrollTop>headerHight){
			fixedNode.css({"position":"fixed","top":"0","width":function(){
				return fixedNode.parent().width()-20;
			}});
		}else{
			fixedNode.css({"position":"static","width":"auto"});
		}
	});	
});