$(document).ready(function(){
	//Generación de código aleatorio
	$("#next-user").click(function(){
		var text = "";
		var possible = "0123456789";
		var lab = "LAB-";
		var code; //código
		for (var i = 0; i < 3; i++){
			text += possible.charAt(Math.floor(Math.random() * possible.length));
			code = lab + text;
		}
		alert("YOUR CODE IS: \n\n" + code);

		//Validación de código aleatorio
		$("#confirm-btn").click(function(){
			var inputVal = $("#confirm-code").val(); //datos del input en modal
			if(inputVal != code){
				alert("Invalid code.");
			}else{
				window.location.href="sign_up_user.html";
			};
		});
	});
});
