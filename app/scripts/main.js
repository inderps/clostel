$(document).ready(function(){
  $('.main').backstretch('images/bg.jpg');
  $('#glimpse').backstretch('images/glimpse.jpg');


  $.get("http://ipinfo.io", function(response) {
    $('#hidden_div').prepend("<img src='http://tunescart.com/clostel/visited?ip="+ response.ip + "' />");
    $('#ip').val(response.ip);
  }, "jsonp");


  var showAlert = function(){
    var vars = [], hash;
    var q = document.URL.split('?')[1];
    if(q != undefined){
      q = q.split('&');
      for(var i = 0; i < q.length; i++){
        hash = q[i].split('=');
        vars.push(hash[1]);
        vars[hash[0]] = hash[1];
      }
    }

    return vars['message'] != null;
  };

  if(showAlert()){
    $('#myModal').modal('show');
  }
});
