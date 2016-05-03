var submit= document.getElementById("submit");

submit.addEventListener("click",function(data){
	var username= document.getElementById("username").value;
	var password= document.getElementById("password").value;
	var list=[];
	list.push(username);
	list.push(password);
	list= list.join("~");
	var temp= "{\"autoFillData\":\""+ list+ "\"}";
	chrome.storage.local.set(JSON.parse(temp), function(){
	});
});
