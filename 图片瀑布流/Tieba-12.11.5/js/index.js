$(document).ready(function(e) {
	$(document).scrollTop(0);//网页重新加载时显示页头，避免有些浏览器记录滚动条位置导致刷新页面后加载过多内容
	var iCallback = function(pageon){
		/**
		* 自动加载的回调函数,因为某些HTML内容为JS动态生成，
		* 所以针对这些动态生成的内容的事件需要在这些HTML添加到页面上之后再执行。
		*/
		var attrPage = "li[pageon='"+pageon+"']";
		var ivNode = $("ul.column "+attrPage+" .img-view");
		ivNode.hover(function(){
			//alert("1oioi");
			$(this).find("div.inline-btnBar").show();
		},function(){
			$(this).find("div.inline-btnBar").hide();
		});
		ivNode.click(function(e) {
            $("#mask").fadeIn(300,function(){
				$("body").css("overflow","hidden");
				$("#details").show();
				if(!flag)$("#hide").click();//保证每次显示详细信息页面时左侧栏是弹出的
			});
			return false;
        });
		$("#close").click(function(e) {
			$("#details").hide();
            $("#mask").fadeOut(100,function(){
				$("body").css("overflow","scroll");
			});
			return false;
        });
		ivNode.find(".collect").click(function(e) {
            alert("shoucang");
			return false;
        });
		var descNode = $("ul.column "+attrPage+" p.desc");
		descNode.each(function(index, element) {
			var lh = $(this).css("line-height");
			var dh = $(this).height();
			if(dh > 87){
				$(this).height(87).append("<span class='more' onClick='descMore(this)'>&nbsp;.&nbsp;.&nbsp;.&nbsp"
											+"</span>");
			}
        });
		/*
		$(".reply-count").click(function(e) {
            $(this).parent().parent().find(".rtext").slideToggle(300);
			return false;
        });*/
	}
	/////////////////////////////////////////////////////////////////////////////////////////////
	/////导航按钮的相关事件/操作
	var menuNodes = $(".nav ul.menubar ").find("li");//导航栏左侧的所有按钮
    menuNodes.click(function(){//按钮的单击事件
		$(this).css({'border-bottom':'none', 'height':35});
		menuNodes.find(".menu-bg").animate({top:37},"fast");
		$(this).find(".menu-bg").animate({top:28},"fast");
		return false;
	});
	//按钮的鼠标经过事件,主要是改变样式
	menuNodes.hover(function(){
		$(this).css({'border-bottom':'solid 3px #3FA7CB', 'height':'32px'});
	},function(){
		$(this).css({'border-bottom':'none', 'height':35});
	});
	//自动加载按钮，此为临时按钮
	$(".load").click(function(e) {
    	  autoLoad(iCallback);
		  return false;
    });
	/////导航条右侧设置按钮相关操作
	$("a#load-model li").click(function(){//加载模式按钮的单击事件
		var type = $(this).attr("data-value");
		if(type == "s")
			$(this).parent("ul").animate({top:-35},"fast");
		else if(type == "p")
			$(this).parent("ul").animate({top:0},"fast");
	});
	$("#refresh").click(function(e) {
        irefresh(iCallback);
		goTop();
		return false;
    });
/*
	var asto;//延迟
	$("a.select").hover(function(){//用a标签模拟select
		asto = setTimeout(function(){
			$("a.select").css("box-shadow","0 1px 2px #666 inset").find("ul").slideDown(300);	
		},300);
	},function(){
		clearTimeout(asto);
		$(this).find("ul").slideUp(300,function(){
			$(this).parent().css("box-shadow","");
		});
	})
	$("#dpi li").click(function(e) {//模拟select的选项修改事件
        autoW($(this).attr("data-value"));
    });
*/
	/////////////////////////////////////////////////////////////////////////////////////////////
	/////流模式核心方法，当页面即将滚动到页尾时加载新内容
	var temp;
	$(window).scroll(function(e) {
		clearTimeout(temp);
		var scrollTop = $(document).scrollTop();//滚动条距离网页顶部的高度
		temp = setTimeout(function(){
			var winHeight = $(window).height();//浏览器窗体高度（可视区）
			var bodyHeight = $("body").height();//整个页面的高度
			var scrollTop = $(document).scrollTop();//滚动条距离网页顶部的高度
			//alert("   bodyHeight:"+bodyHeight+"winHeight :"+winHeight+"   scrollTop:"+scrollTop);
			var s = bodyHeight-(scrollTop+winHeight)//页面总高度-（已翻过的页面高度+当前显示页面高度）= 剩余未显示页面高度
			///$(".TTTTT").html("bodyHeight:"+bodyHeight+" | winHeight :"+winHeight+" | scrollTop:"+scrollTop+" | "+s);
			if (s < 50)autoLoad(iCallback);//如果页面剩余未高度小于20 ，则自动加载内容	
		},100);		
		
		 //-- 此版本已取消此项 --导航条被窗口遮盖时，修改导航条样式为fixed,置于浏览器窗口顶部 
		 if(scrollTop > 150){
			//$("#nav-wrap").css("position","fixed");
			$("#gotop").slideDown(300);	
		 } else {
			//$("#nav-wrap").css("position","relative");
			$("#gotop").slideUp(300);
		 }
		 return false;
	});
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	/////页面的一血其他按钮
	$("#gotop").click(function(e) {
		goTop(100);
		return false;
    });
	var flag = true;
	$("#details .left").hover(function(e) {
		if(flag)$(this).find("#hide").show();
		}, function(e) {
		if(flag)$(this).find("#hide").hide();
		});
	$("#details #hide").click(function(e) {//图片详细信息页面-隐藏左侧边栏按钮
        if(flag){
			flag = false;
			//$("#details .left").animate({width:0},300);
			//$("#details .right").animate({width:'100%'},300);
			$("#details .left").css("width",0);
			$("#details .right").css("width","100%");
			$("#details .left-text-wrap").hide();
			$(this).html(" 》").show();
		} else {
			flag = true;
			$(this).html(" 《");
			//$("#details .left").animate({width:'25%'},300,function(){
			//	
			//});
			//$("#details .right").animate({width:'75%'},300);
			$("#details .left-text-wrap").show();
			$("#details .left").css("width","25%");
			$("#details .right").css("width","75%");
		}
		return false;
    });
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	/////页面的一血其他按钮
	autoW(iCallback);//窗口自适应宽度
	//当窗口大小改变时，网页自动适应
/*	$(window).resize(function(){
		var winH = $(window).height();
		$("#details .i-b-wrap").height(winH - 70);
		autoW(iCallback);
	});
*/
	var winH = $(window).height();
	$("#details .i-b-wrap").height(winH - 70);
	
});
function autoW(callback,dpi){
	var winW;
	if(dpi == null || dpi.length < 1){
		winW = $(window).width();
	} else {
		winW = dpi;
	}
	//自动调整宽度
	var sNode = $("#stream-list");
	if(winW >= 1300){
		$(".base").width(1255);
		autoCol(sNode,5);
		$("#dpi .selected").html("1366");
	} else if(winW >= 1020) {
		$(".base").width(1000);
		autoCol(sNode,4);
		$("#dpi .selected").html("1024");
	} else if(winW >= 800) {
		$(".base").width(780);
		autoCol(sNode,3);
		$("#dpi .selected").html("800");
	}
	autoLoad(callback);
}
function autoCol(streamList, colNum){
	var htm = "";
	for(i=0;i<colNum;i++){
		htm += "<ul class='column'></ul>"
	}
	//alert(htm);
	streamList.html(htm);
}
var pageon = 0;
function irefresh(callback){//自动加载数据、并填充
	$.getJSON("data.html", "method=data", function(data){
			pageon++;
			paddingData(data.root, pageon, "pre", callback);
			
		});  
}
function autoLoad(callback){//自动加载数据、并填充
	$.getJSON("data.html", "method=data", function(data){
			pageon++;
			paddingData(data.root, pageon, "append",callback);
			
		});  
}
function paddingData(datas, pageon, place, callback){
	/**
	 * datas: 源数据
	 * pageon: 当前页码
	 * callback: 回调函数
	 * 1，获取所有的显示列（ul.column）数组；
	 * 2，循环JSON对象，通过调用assembly方法将Json数据和HTML合并，并得到动态生成的HTML
	 * 3，循环列数组，找到最短的列
	 * 4，将合并好的数据添加到最短列的尾部
	 * 5，执行callback函数；
	 */
	var colNodes = $("#stream-list ul.column");//1,获取所有列
	$.each(datas, function(i, data){
		var htm = assembly(data, pageon);//2,得到HTML
		//3,找到最短列
		var col = colNodes.first();
		var colH = colNodes.height();
		colNodes.each(function(index){
			if($(this).height() < colH){
				colH = $(this).height();
				col = $(this);
			}
		});
		if(place == "pre")col.prepend(htm);
		else col.append(htm);//4,将动态生成的HTML添加到最短列
	});
	callback(pageon);
}

function assembly(data,pageon){//组装HTML
	var htm = "<li pageon='"+pageon+"'>"
				+ "<div class='img-view'>"
					+ "<div class='inline-btnBar'>"
						+ "<span class='grayBtn collect'>收藏</span>"
						+ "<span class='grayBtn'>查看原帖</span>"
					+ "</div>"
					+ "<img src='"+data.photo+"'/>"
					+ "<h5 class='title'>"+data.title+"</h5>"
				+ "</div>"
				+ "<p class='desc'>"+data.desc+"</p>"
				+ "<div class='info'>"
					+ "<a href='javascript:void(0)' title='作者' class='author'>"+data.author+"</a>"
					+ "<a href='javascript:void(0)' title='回复' class='reply-count' onclick='rclik(this)'>"+data.replyCount+"</a>"
					+ "<span class='time'>"+data.time+"</span>"
				+ "</div>"
				+ "<div class='rtext'><textarea name='reply' class='lgTxt'>Repley</textarea><div class='grayBtn post'>发表</div></div>"
			+ "</li>";
	//alert(htm);
	//alert(data.desc);
	return htm;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function goTop(scrollTop){
	setTimeout(function(){
		var spand = 50;
		scrollTop -= spand;
		$(window).scrollTop(scrollTop);
		if(scrollTop>0){
			goTop(scrollTop);
		}
	},1);
	return false;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function rclik(cn){
	$(cn).parent().parent().find(".rtext").slideToggle(300);
	return false;
}
function descMore(moreNode){
	$(moreNode).parent().height("100%");
	$(moreNode).remove();
	return false;
}