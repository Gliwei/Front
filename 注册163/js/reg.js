// JavaScript Document
function tabClick(flag, node){
	var tabDiv = $("#tab");
	if(flag=='l'){
		tabDiv.style.backgroundPosition = "-360px -432px";
		$("#phone").style.display = "none";
		$("#common").style.display = "block";
	}else if(flag=='r'){
		tabDiv.style.backgroundPosition = "0 -432px";
		$("#phone").style.display = "block";
		$("#common").style.display = "none";
	}
	
	for(var i=0;i<children(tabDiv).length;i++){
		children(tabDiv)[i].style.color = "#333333";	
	}
	node.style.color = "#FAFAFA";
}