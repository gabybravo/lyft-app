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


