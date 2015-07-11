// JavaScript Document
$(document).ready(function(e) {
	$(".left").load("topicList.html");
	$(".new").click(function(e) {
        $("#bottom form").slideToggle(300);
    });
	$(".refresh").click(function(e) {
        $(".left").load("topicList.html");
    });
	$(".menu li").click(function(e) {
        $(".menu li").removeClass("s");
		$(this).addClass("s");
    });
});