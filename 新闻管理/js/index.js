// JavaScript Document
$(document).ready(function(){
	var liAll = $("#menu li");
	liAll.click(function(){
		liAll.css("background-image","url(img/btn_bg.png)")
				.css("position","")
		$(this).css("background-image","url(img/btn_h.png)")
				.css("position","relative")
				.css("width","95px");
	});
	$("#default").click();
});