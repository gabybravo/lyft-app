
$(document).ready(function(){      
  
  //localStorage
  $(window).unload(saveSettings);
  loadSettings();

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


