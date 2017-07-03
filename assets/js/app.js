
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
      var inputVal = $("#confirm-code").val(); //datos del input en modal
      if(inputVal != code){
        alert("Invalid code.");
      }else{
        window.location.href="sign_up_user.html";
      };

    });
    
  });

   });

$(document).ready(function(){  

$("#next-user").click(function(){      
   
    /*Captura de código*/     

/*var res=$(code).val();
 Guardando los datos en el LocalStorage 
  localStorage.setItem(“Código”,res);*/
  
  localStorage["Código"]=$(code).val();

   }); 
 }); 

$(document).ready(function(){  
  $("#boton-cargar").click(function(){ 

    /*Obtener datos almacenados*/ 
    var codigo = localStorage.getItem(“Código”); 

alert(codigo);

  /*Mostrar datos almacenados*/    

  /*$(codigo).html(); */  
    });    
}); 


