alert("holi");

$(document).ready(function(){      
  
  $(’#next-user’).click(function(){      
   
    /*Captura de código*/     

var code=$(res).val();
  /*Guardando los datos en el LocalStorage*/ 
  localStorage.setItem(“Código”, code);   
});   

/*Funcion Cargar y Mostrar datos*/ 
    
  $(’#boton-cargar’).click(function(){ 

    /*Obtener datos almacenados*/ 
    var codigo = localStorage.getItem(“Código”); 

  /*Mostrar datos almacenados*/    

  $(codigo).html();   
    });  
}); 
