// JavaScript Document
$(document).ready(function(){
	
	var selected = 0 ;//当前显示的li
	/*动态定位Bottom——btn*/
	//var viewWidth = 1000;//li 宽度
	var viewWidth = $("#view").width();//li 宽度
	var bottom_btn = $("#bottom_btn");
	var boderHight = $("#boder").height();//boder高度
	bottom_btn.css("top",boderHight-133);
	
	/*鼠标滚轮事件*/
	//$("#boder")
	
	/*加载预显示数据*/
	$("#view ul").load("topView.html",function(){
		$(this).find("li").width(viewWidth);
	})
	
	/*左滑按钮的 鼠标经过 和 点击事件*/
	$("#left_btn").hover(function(){
		$(this).css("opacity","1");
	} , function(){
		$(this).css("opacity","0.8");
	}).click(function(){
		//单击事件
		(0<selected && selected<=5)? selected-- : selected = 5 ;
		$("#view ul").animate({left: -1*viewWidth*selected},500,function(){
			bottom_btn.find("img").attr("src","img/g2_bottom_btn.png");
			bottom_btn.find("#b"+ selected ).attr("src","img/g2_bottom_btn_h.png");	
		});	
	});
	
	/*右滑按钮的 鼠标经过 和 点击事件*/
	$("#right_btn").hover(function(){
		//alert("in");
		$(this).css("opacity","1");
	} , function(){
		$(this).css("opacity","0.8");
	}).click(function(){
		//单击事件
		(0<=selected && selected<5)? selected++ : selected = 0 ;
		$("#view ul").animate({left: -1*viewWidth*selected},500,function(){ 
			bottom_btn.find("img").attr("src","img/g2_bottom_btn.png");
			bottom_btn.find("#b"+ selected ).attr("src","img/g2_bottom_btn_h.png");		
		});
	});
	
	/*bottom——btn的点击事件*/
	$("#bottom_btn img").click(function(){
		var iThis = $(this);
		var i = $(this).index();
		selected = i ;
		//alert(viewWidth+" * "+i+" * "+-1);
		$("#view ul").animate({left: -1*viewWidth*i },500,'swing',function(){
			bottom_btn.find("img").attr("src","img/g2_bottom_btn.png");
			iThis.attr("src","img/g2_bottom_btn_h.png");	
		});
	});
	
	//默认预处理
	$("#bottom_btn img:first").click();//默认显示第一页
	
	function autoClick (){
		$("#boder #right_btn").click();
	}
	//setTimeout(autoClick,4000);
	var timer = setInterval(autoClick,4000);	
	
	$("#boder").hover(function(){
		clearInterval(timer);
	} , function(){
		timer = setInterval(autoClick,4000);
	});
});