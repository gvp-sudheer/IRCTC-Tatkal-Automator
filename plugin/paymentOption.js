( function paymentOption(){
	var paymentType = "default";
	var bankCode = "";
	document.getElementById(paymentType).click();
	document.getElementsByName(paymentType)[bankCode].checked = true;
	document.getElementsByName(paymentType)[bankCode].onchange();
	document.getElementById("validate").click();
}
)();