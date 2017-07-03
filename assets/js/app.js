$(document).ready(function(){
  //localStorage
  $(window).unload(saveSettings);
  loadSettings();

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

//Funciones localStorage
function loadSettings() {
  $('#code-country').val(localStorage.phone);
  $("#confirmCode").val(localStorage.confirmCode);
}

function saveSettings() {
  localStorage.phone = $('#code-country').val();
  localStorage.confirmCode = $("#confirmCode").val();
}

//funcion que nos ubica en el mapa
function success(position) {
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
};

function error(msg) {
 var status = document.getElementById('status');
 status.innerHTML= "Error [" + error.code + "]: " + error.message; 
}

if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(success, error,{maximumAge:60000, timeout: 4000});
} else {
 error('Su navegador no tiene soporte para su geolocalización');
};

