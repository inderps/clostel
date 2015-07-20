$(document).ready(function(){
  $('body').backstretch('images/bg.jpg');

  function initialize() {
    var myLatlng = new google.maps.LatLng(52.4965481, 13.4380442);
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: myLatlng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hannah & Cash'
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
});
