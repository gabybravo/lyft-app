$(document).ready(function(){
	//Generación de código aleatorio
  var code; //código
	$("#next-user").click(function(){
		var text = "";
		var possible = "0123456789";
		var lab = "LAB-";
		
		for (var i = 0; i < 3; i++){
			text += possible.charAt(Math.floor(Math.random() * possible.length));
			code = lab + text;
		}
		alert("YOUR CODE IS: \n\n" + code);

		//Validación de código aleatorio
		$("#confirm-btn").click(function(){
			var inputVal = $("#confirmCode").val(); //datos del input en modal
			if(inputVal != code){
        $(".modal-body").append("<span class='span-style'>Invalid Code</span>");
			}else{
				window.location.href="sign_up_user.html";
			};
		});
	});
});




