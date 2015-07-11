// JavaScript Document
$(document).ready(function(){
	$("form input:text").focusin(function(){
		if($(this).attr("value") == "账号 / ID"){
			$(this).val("");
		}
	}).focusout(function(){
		if(!$(this).attr("value")){
			$(this).val("账号 / ID");
		}
	}).keyup(function(){
		$("#eUname").fadeOut(300);
	});
	$("form input:password").keyup(function(){
		$("#eUpass").fadeOut(300);
	});
	
	var loginBtn = $("#loginBtn");
	var clearBrn = $("#clearBtn");
	
	var uname = $("#uname");
	var upass = $("#upass");
	loginBtn.click(function(){
		if(!uname.attr("value") || uname.attr("value") == "账号 / ID"){
			$("#eUname").html("请填写账号").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			return;
		}
		if(!upass.attr("value")){
			$("#eUpass").html("请填写密码").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			return;
		}
		//提交表单
		alert($("#loginFrom").serialize());	
	});
	
	loginBtn.hover(function(){
		$(this).attr("src","img/login_btn_c.png");	
	},function(){
		$(this).attr("src","img/login_btn.png");
	});
	clearBrn.hover(function(){
		$(this).attr("src","img/clear_c.png");	
	},function(){
		$(this).attr("src","img/clear.png");
	});
});