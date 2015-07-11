// JavaScript Document
$(document).ready(function(e) {
    $(window).scroll(function(e) {
        var scrollTop = $(document).scrollTop();
		if(scrollTop > 0)
			$("#header").css("z-index","50");
		else
			$("#header").css("z-index","47");
		if(scrollTop > 200)
			$("#goTop").fadeIn(200);
		else
			$("#goTop").fadeOut(200);
    });
	
	$(".limenu").click(function(e) {
		$(".limenu").removeClass("select");
        $(this).addClass("select");
    }).hover(function(){
		var childUl = $(this).find("ul");
		if(childUl.length > 0)
			childUl.fadeIn(300);
	},function(){
		$(this).find("ul").fadeOut(300);
	});
	
	$("#goTop").click(function(e) {
        $(window).scrollTop(0);
    });
});