// JavaScript Document
$(document).ready(function(e) {
	$("table tbody tr:even").addClass("even");
   	$("table tbody tr:odd").addClass("odd");
   
   	$("#add").click(function(e) {
   		$(".content .addBox").fadeIn(300);
   	});
});