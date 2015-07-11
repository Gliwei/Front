// JavaScript Document
$(document).ready(function(e) {
	$(".list li:even").addClass("even");
   	$(".list li:odd").addClass("odd");
	$(".fold").click(function(e) {
        $("#bottom form").slideToggle(300);
    });
});