// JavaScript Document
$(document).ready(function(e) {
	$("table tbody tr:even").addClass("even");
   	$("table tbody tr:odd").addClass("odd");
   
   	$(".tabbar li").click(function(e) {
		$(".tabbar li").removeClass("selected");
   		$(this).addClass("selected");
   	});
	
	$("th :checkbox").change(function(e) {
		//alert($(this).attr("checked"))
		if($(this).attr("checked") == "checked" )
        	$("tbody :checkbox").attr("checked" , "true");
		else
			$("tbody :checkbox").removeAttr("checked");
    });
	
	$("#add").click(function(e) {
		$(".tabbar").append("<li><span>NewTabffffffffffff</span></li>");
		$(".tabbar li").click(function(e) {
			$(".tabbar li").removeClass("selected");
			$(this).addClass("selected");
		});
			
		var tabWidth = 0;
		var maxWidth = $(".header").width();
		var tabNum = 0;
		$(".tabbar li").each(function(index, element) {
			tabWidth += $(this).width();
			tabNum++;
		});
		//alert(tabWidth  +"    "+maxWidth)
		if(tabWidth > maxWidth ){
			
			var w = maxWidth / tabNum + 40 /tabNum - 10;
			
			if(w >= 60)
				$(".tabbar li span ").width(w);
			//alert(w +" = "+maxWidth+" / "+tabNum +" + "+40+" / "+tabNum);
		}
    });
/*	
	var tabWidth = 0;
	var maxWidth = $(".header").width();
	var tabNum = 0;
	$(".tabbar li").each(function(index, element) {
        tabWidth += $(this).width();
		tabNum++;
    });
	if(tabWidth > maxWidth){
		
		var w = maxWidth / tabNum;
		$(".tabbar li").width(w);
		alert(w +" = "+maxWidth+" / "+tabNum )
	}
	//alert(ww + " , " + $(".header").width());
*/
});