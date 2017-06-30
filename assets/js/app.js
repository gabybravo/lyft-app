$(document).ready(function(){
  $("#next-user").click(function(){
    var text = "";
    var possible = "0123456789";
    var lab = "LAB-";
    var res;
    for (var i = 0; i < 3; i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      res = lab+text;
    }
    
    alert(res);
  });
})
