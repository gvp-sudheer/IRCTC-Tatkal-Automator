( function login(){
	var logincred;
	function fillLoginDetails(){
		var userid = document.getElementById("usernameId");
		userid.value = logincred.split("~")[0];
		var password = document.getElementsByClassName("loginPassword")[0];
		password.value = logincred.split("~")[1];
		window.addEventListener("keydown",function(data){
			if(data["keyCode"] == 13)
				document.getElementById("loginbutton").click();
		});
	}
	
	chrome.storage.local.get("autoFillData", function(x){
		logincred= x.autoFillData;
		fillLoginDetails();
	});
})();