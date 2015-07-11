$(document).ready(function(){
	//为主菜单添加单击事件
	$(".main > a").click(function(){
		var ulNode=$(this).next("ul");
		//左上角展现or隐藏
		//ulNode.toggle(500);
		//渐隐
		//ulNode.fadeIn(1000);
		//卷帘式展开or隐藏
		ulNode.slideToggle(500);
		//变换连接前图标
		changeImg($(this));
	});
	//为所有子菜单添加鼠标经过事件监听
	$(".main li a").hover(function(){
		$(this).css("background-color","#555").css("color","#FFF");
	},function(){
		$(this).css("background-color","#CCC").css("color","#333");
	});
});

/*变换连接前图片的方法*/
function changeImg(aNode){
	if(aNode){
		if(aNode.css("background-image").indexOf("img/up.png") >= 0){
			aNode.css("background-image","url(img/down.png)");
		}else{
			aNode.css("background-image","url(img/up.png)");
		}
	}
}
