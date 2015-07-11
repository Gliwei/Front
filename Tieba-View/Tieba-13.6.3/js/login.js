// JavaScript Document
$(document).ready(function(e) {
	$("#uname").keydown(function(e) {
		if (e.keyCode == '13') {
				$("#upass").focus();
			}
		});
		$("#upass").keydown(function(e) {
			if (e.keyCode == '13') {
				login();
			}
	});		
});
function login(){
	/*
	var postData = $("#NP").serialize()+"&tbid="+$("#tiebaId").val();
	$.post("/tb/login",postData,function(data){
		var msg = data.msg;
		if(msg == "success"){
			window.location.reload();//刷新页面
		} else {
			$("#NP #msg").html(msg);
		}
	},"json").error(function(textStatus, jqXHR){
		$("#NP #msg").html("未知错误："+textStatus+jqXH);
	});
	*/
}