$(document).ready(function(){

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

  window.setInterval(function(){
    $('#signupModal').modal('show');
  }, 15000);


  $('a').click(function(ev){
    if($(ev.currentTarget).attr('href') == '#showPopup'){
      $('#signupModal').modal('show');
    }
  });

});
