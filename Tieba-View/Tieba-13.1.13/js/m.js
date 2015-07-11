// JavaScript Document
$(document).ready(function(e) {
	$("#center .tab-header li").click(function(e) {
        $("#center .tab-header li").removeClass("s");
		$(this).addClass("s");
    });
});