// JavaScript Document
$(document).ready(function(){
	
	var selected = 0 ;//当前显示的图片索引（索引从0开始）
	var imgCount = 11;//最后一张图片的索引
	//var viewWidth = 1000;//li 宽度
	var viewWidth = $("#view").width();//图片宽度
	var ctrlBox = $("#ctrl-box");//底部的控制按钮
	var boderHight = $("#boder").height();//boder高度
	//bottom_btn.css("top",boderHight-92);

	/*鼠标滚轮事件*/
	//未实现
	
	/*加载预显示数据*/
	$("ul#film").load("topView.html",function(){
		$(this).find("li").width(viewWidth);
	})
	
	$("ul#ctrl-box").load("topView.html",function(){
		$("#ctrl-box li:first").addClass("current");//默认第一页
		var temp;
		/*ctrl-box的鼠标移动事件*/
		$("#ctrl-box li").hover(function(){
			var iThis = $(this);
			var i = $(this).index();
			/* 解决鼠标不经意划过按钮引起的误操作
			 * 将鼠标经过事件的执行方法延后300毫秒执行
			 */
			clearTimeout(temp);
			temp = setTimeout(function(){
				selected = i ;
				$("#view ul").animate({left: -1*viewWidth*i },500,'swing',function(){
						ctrlBox.find("li").removeClass("current");
						iThis.addClass("current");
					});
			},300);
		} , function(){});
				
	});
	
	/*左滑按钮的 鼠标经过 和 点击事件*/
	$("#left_btn").hover(function(){
		$(this).css("opacity","1");
	} , function(){
		$(this).css("opacity","0.4");
	}).click(function(){//单击事件
		//通过控制当前显示图片的索引来实现图片滚动播放
		(0<selected && selected<=imgCount)? selected-- : selected = 5 ;
		$("#view ul").animate({left: -1*viewWidth*selected},500,function(){
			ctrlBox.find("li").removeClass("current");
			ctrlBox.find("#b"+ selected ).addClass("current");	
		});	
	});
	
	/*右滑按钮的 鼠标经过 和 点击事件*/
	$("#right_btn").hover(function(){
		//alert("in");
		$(this).css("opacity","1");
	} , function(){
		$(this).css("opacity","0.4");
	}).click(function(){//单击事件
		//通过控制当前显示图片的索引来实现图片滚动播放
		(0<=selected && selected<imgCount)? selected++ : selected = 0 ;
		$("#view ul").animate({left: -1*viewWidth*selected},500,function(){ 
			ctrlBox.find("li").removeClass("current");
			ctrlBox.find("#b"+ selected ).addClass("current");		
		});
	});
	
	//默认预处理
	//$("#bottom_btn img:first").click();//默认显示第一页
	
	function autoClick (){
		$("#right_btn").click();
	}
	//setTimeout(autoClick,4000);
	var timer = setInterval(autoClick,4000);	
	
	var temp;
	/*鼠标进入框内显示底部控制按钮,并且停止图片自动播放*/
	$("#boder").hover(function(){
		clearInterval(timer);
		clearTimeout(temp);
		$(this).find("#ctrl").show(300);	
		
	} , function(){
		timer = setInterval(autoClick,4000);
		var ithis = $(this);
		temp = setTimeout(function(){
			ithis.find("#ctrl").hide(500);
		},200);
	});
});