// JavaScript Document
$(document).ready(function(e) {
	$(".left").load("remarkList.html");
	$(".new").click(function(e) {
        $("#bottom form").slideToggle(300);
    });
	$(".refresh").click(function(e) {
        $(".left").load("remarkList.html");
    });
	$(".menu li").click(function(e) {
        $(".menu li").removeClass("s");
		$(this).addClass("s");
    });
});