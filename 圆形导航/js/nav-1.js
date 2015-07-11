// JavaScript Document
$(function(){
	var cnWrapper = $(".cn-wrapper");
	$(".cn-button").click(function(e) {
		cnWrapper.toggleClass("opened");
		$(this).find("i").toggleClass("icon-minus");
    });
});