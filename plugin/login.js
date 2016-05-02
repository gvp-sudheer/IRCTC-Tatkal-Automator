( function login(){
	var userid = document.getElementById("usernameId");
	userid.value = "K_Haritha";
	var password = document.getElementsByClassName("loginPassword")[0];
	password.value = "Kpu113";
	window.addEventListener("keydown",function(data){
		if(data["keyCode"] == 13)
			document.getElementById("loginbutton").click();
	});
}	
)();