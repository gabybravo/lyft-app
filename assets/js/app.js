<<<<<<< HEAD
$(document).ready(function(){
	'use strict';
		// error variables
		var UserError  = true,
<<<<<<< HEAD
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
=======
		EmailError = true;
=======
//funcion que nos ubica en el mapa
function success(position) {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var mapcanvas = document.createElement('div');
  mapcanvas.id = 'mapcanvas';
  mapcanvas.style.height = '400px';
  mapcanvas.style.width = '560px';

  document.querySelector('#map').appendChild(mapcanvas);

   var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
   var myOptions = {
     zoom: 15,
     center: latlng,
     mapTypeControl: false,
     navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
     mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

//Esta función nos marca nuestra posicion
   var marker = new google.maps.Marker({
     position: latlng,
     map: map,
     title:"Usted está aquí."
   });

//Esta función es la de autocomplete para el input
  var input = (document.getElementById('trazar-ruta'));
  var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

//Función trazar ruta
  document.getElementById('trazar').addEventListener('click', function(){
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
    origin: latlng,
    destination: document.getElementById('trazar-ruta').value,
    travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
};

}

function error(msg) {
 var status = document.getElementById('status');
 status.innerHTML= "Error [" + error.code + "]: " + error.message; 
}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error,{maximumAge:60000, timeout: 4000});
} else {
  error('Su navegador no tiene soporte para su geolocalización');
};
>>>>>>> 9f28124f20775a79dd1f861aa612689d5d1c5147


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
>>>>>>> 3c445cc39990be97190c88fa98b6c203a872048e

		 	event.preventDefault(); // prevent sending 
		 	$("#name,#email").blur();
	 	}
	 
	});
});

function guardarDatos () {
	localStorage.nombre = document.getElementById("name").value;
	localStorage.email = document.getElementById("email").value;
}

