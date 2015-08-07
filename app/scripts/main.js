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

  var signupVisible = false;


  var showSignup = function(){
    if(!signupVisible && !showAlert()){
      $('#signupModal').modal('show');
      signupVisible = true;
    }
  };

  var myTimer = window.setInterval(showSignup, 10000);

  $('#signupModal').on('hidden', function () {
    signupVisible= false;
    clearInterval(myTimer);
    myTimer = setInterval(showSignup, 10000);
  });


  $('a').click(function(ev){
    if($(ev.currentTarget).attr('href') == '#showPopup'){
      $('#signupModal').modal('show');
      signupVisible = true;
    }
  });

  $('.book-btn').click(function(ev){
    ev.preventDefault();
    $('#signupModal').modal('show');
    signupVisible = true;
  });

});
