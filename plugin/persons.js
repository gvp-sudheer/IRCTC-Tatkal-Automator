( function persons(){
	var uName = document.getElementsByClassName("input-style1 psgn-name")[0];
	uName.value = "Haritha";
	var uAge = document.getElementById("addPassengerForm:psdetail:0:psgnAge");
	uAge.value = "21";
	var uGender = document.getElementById("addPassengerForm:psdetail:0:psgnGender");
	uGender.value = "F";
	var phoneNum = document.getElementById("addPassengerForm:mobileNo");
	phoneNum.value = "8374061567";
	window.addEventListener("keydown",function(data){
		if(data["keyCode"] == 13)
			document.getElementById("validate").click();
	});
}
)();