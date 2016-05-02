(function journeyDetails(){
	var fromStation = document.getElementById("jpform:fromStation");
	fromStation.value = "SECUNDERABAD JN - SC";
	var toStation = document.getElementById("jpform:toStation");
	toStation.value = "VISAKHAPATNAM - VSKP";
	var journeyDate = document.getElementById("jpform:journeyDateInputDate");
	journeyDate.value = "26-04-2016";
	window.addEventListener("keydown",function(data){
		if(data["keyCode"] == 13)
			document.getElementById("jpform:jpsubmit").click();
	});
}
)();