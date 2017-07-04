$(document).ready(function(){
	'use strict';
		// error variables
		var UserError  = true,
		EmailError = true;


		/*----------* NAME *----------*/
		$("#name").blur(function() {
			if($(this).val()==''){
				$(this).css("border-color", "#f300b2");
				$("#error_vacio").text("* Complete el campo!");
				UserError = true;
			}

			else if (!(/^([A-ZÑÁÉÍÓÚa-zñáéíóú]{1,13})+$/.test($("#name").val()))) {
				$(this).css("border-color", "#f300b2");
				$("#error_name").text("* Complete el campo con letras de la A-Z!");
				UserError = true;
			}

			else {
				$(this).css("border-color", "#2eb82e");
				$("#error_vacio").text("");
				UserError = false;
			}
		});

		/*----------* EMAIL *----------*/
		$("#email").blur(function() {
			if($(this).val()==''){
				$(this).css("border-color", "#f300b2");
				$("#error_vacio").text("* Complete el campo!");
				EmailError = true;
			}

			else if (!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#email").val()))) {
				$(this).css("border-color", "#f300b2");
				$("#error_email").text("* Ingrese un correo valido!");
				EmailError = true;
			}

			else {
				$(this).css("border-color", "#2eb82e");
				$("#error_vacio").text("");
				EmailError = false;
			}
		});

		/*----------* CHECKBOX *----------*/

		$('button[type="submit"]').attr('disabled','disabled');
		$('input[type="text"]').keypress(function(){
			if($(this).val() != ''){ 
				$('button[type="submit"]').removeAttr('disabled');
			}
			
		});


		/*----------* COMPROBAR *----------*/
		$(".contact-form").submit(function(event) {

			if(UserError === true || EmailError === true){

		 	event.preventDefault(); // prevent sending 
		 	$("#name,#email").blur();
		 }
		});
	});