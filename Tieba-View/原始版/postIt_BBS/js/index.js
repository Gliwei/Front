// JavaScript Document
//主页js
$(document).ready(function(){
	//鼠标经过menu翻转图片
	/*
	和click事件有冲突，暂时解决办法css伪类
	$("#menu_box li").hover(function(){
		$(this).children("a").css("background-position","left top");
		$(this).children("a").children("span").css("background-position","right top").css("color","#003333");
	},function(){
		$(this).children("a").css("background-position","");
		$(this).children("a").children("span").css("background-position","").css("color","");
	});
	/*鼠标单击事件*/
	$("#content").load("list.html");
	$("#First").css("background-position","left top");
	$("#First").children("span").css("background-position","right top").css("color","#003333");
	var menuLi = $("#menu_box li");
	menuLi.each(function(index){
		$(this).click(function(){
			//取消所有li的相关CSS（Style）
			menuLi.css("background-position","");
			menuLi.children("span").css("background-position","").css("color","");
			//为当前点击的li添加翻转效果
			$(this).css("background-position","left top");
			$(this).children("span").css("background-position","right top").css("color","#003333");
			/*动态加载content内容*/
			if(index == 0){
				//加载贴吧帖子列表
				$("#content").load("list.jsp");
			} else if(index == 1){
				//加载贴吧精品区列表
				$("#content").load("list1.jsp");
			} else if(index == 2){
				//加载贴吧投票区列表
				$("#content").load("list2.jsp");
			}
		});
	});

	//对于loading图片绑定ajax请求开始和交互结束的事件
	$("#center p").bind("ajaxStart",function(){
		//alert("Load Start!");
		//把div里面的内容清空
		$("#content").html("");
		//整个页面中任意ajax交互开始前，function中的内容会被执行
		$(this).show();
	}).bind("ajaxStop",function(){
		//整个页面中任意ajax交互结束后，function中的内容会被执行	
		//alert("Load Over!");
		$(this).slideUp("500");
		//表格的隔行变色 ，？？ （Firrefox ，Chrome）放在被加载页面无效果 ？？，IE有效。
		$("table tr:even").css("background-color","#ECE9D8");
	});
});