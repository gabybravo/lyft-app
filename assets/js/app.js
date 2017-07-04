$(document).ready(function(){
	'use strict';
		// error variables
		var UserError  = true,
			EmailError = true;

	/*----------* NAME *----------*/
	$("#name").blur(function() {
		if($(this).val()==''){
			$(this).css("border-color", "#f300b2");
			$("#error_vacio_name").text("* Ingrese Nombre y Apellido!");
			UserError = true;
		}

		else if (!(/^([A-ZÑÁÉÍÓÚa-zñáéíóú]{1,13})+$/.test($("#name").val()))) {
			$(this).css("border-color", "#f300b2");
			$("#error_name").text("* Complete el campo con letras de la A-Z!");
			$(this).val("");
			UserError = true;
		}

		else {
			$(this).css("border-color", "#2eb82e");
			$("#error_name").hide();
			$("#error_vacio_name").hide();
			UserError = false;
		}
	});

	/*----------* EMAIL *----------*/
	$("#email").blur(function() {
		if($(this).val()==''){
			$(this).css("border-color", "#f300b2");
			$("#error_vacio_email").text("* Ingrese correo!");
			EmailError = true;
		}

		else if (!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#email").val()))) {
			$(this).css("border-color", "#f300b2");
			$("#error_email").text("* Ingrese un correo valido!");
			$(this).val("");
			EmailError = true;
		}

		else {
			$(this).css("border-color", "#2eb82e");
			$("#error_email").hide();
			$("#error_vacio_email").hide();
			EmailError = false;
		}
	});

	/*----------* QUITAR ICONO AL INPUT *----------*/
	$(".i-user").click(function() {  
        $(this).css('background-image', 'none');  
    });

	$(".i-mail").click(function() {  
        $(this).css('background-image', 'none');  
    });

	/*----------* HABILITAR CHECKBOX *----------*/
	$('input[type="checkbox"]').attr('disabled','disabled');
     $('input[type="text"]').keypress(function(){
            if($(this).val() != ''){
               $('input[type="checkbox"]').removeAttr('disabled');
            }
    });

	/*----------* VALIDAR CHECKBOX *----------*/
	$('button[type="submit"]').attr('disabled','disabled');
	$("#check").click(function() {  
        if($("#check").is(':checked')) {  
            $('button[type="submit"]').removeAttr('disabled');  
        } else {  
        	$('button[type="submit"]').attr('disabled','disabled');
            $("#error_check").text("* Debe aceptar los términos y condiciones!");  
        }  
    });

	/*----------* COMPROBAR *----------*/
	$(".contact-form").submit(function(event) {

		if(UserError === true || EmailError === true){
		EmailError = true;
		}

	});

});




