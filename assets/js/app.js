$(document).ready(function(){
	//Generación de código aleatorio
	$("#next-user").click(function(){
		var text = "";
		var possible = "0123456789";
		var lab = "LAB-";
		var code;
		for (var i = 0; i < 3; i++){
			text += possible.charAt(Math.floor(Math.random() * possible.length));
			code = lab + text;
		}
		alert("YOUR CODE IS: \n\n" + code);
	});
	
})
