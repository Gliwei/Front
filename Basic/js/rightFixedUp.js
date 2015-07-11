// JavaScript Document
function modifyWidth(){
	var w = $("#w").val();
	$("div.base").animate({"width":w},300);
}
$(function(){
	var oldScrollTop = 0;
	$(window).scroll(function(e) {
		var fixedNode = $(".info .inner");//需要浮动的元素
		var scrollTop = $(window).scrollTop();
		var headerHight = $(".header").height();
		
		$("#test").html("scrollTop:"+scrollTop+"<br> headerHight:"+headerHight);		
		
		//有侧边栏超出隐藏
		if(scrollTop > headerHight){
			fixedNode.css({"position":"fixed","top":"0","width":function(){
				var pad = fixedNode.css("padding");
				return fixedNode.parent().width()-pad;
			}});
		}else{
			fixedNode.css({"position":"static","width":"auto"});
		}
		
		/* 滚动条下滑右侧列表自动折叠，上滑展开 */
		var fixedNodeH = fixedNode.height();
		var winH = $(window).height();
		
		var idx = Math.floor(scrollTop/120);//计算出当前要隐藏的序列
		//console.info(idx);
		if(oldScrollTop > scrollTop){
			//下滑
			$(".box:gt("+idx+")").find(".text").slideDown(300);//解决0不展开
			$(".box:eq("+idx+")").find(".text").slideDown(300);
		}else{
			//上滑
			if(fixedNodeH > winH){
				$(".box:lt("+idx+")").find(".text").slideUp(300);
			}
		}
		oldScrollTop = scrollTop;
	});
});