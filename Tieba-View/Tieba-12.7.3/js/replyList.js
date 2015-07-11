// JavaScript Document
$(document).ready(function(e) {
	$("#bottomBar .say").click(function(e) {
        $(this).parent().parent().parent().find(".text").slideToggle(300).find("textarea").focus();
    });
});