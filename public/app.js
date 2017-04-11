var initialise = function(){

 var LOCATIONS = [
      {pos: {lat: -33.9004, lng: 151.2704}, info: "<p>This is Tamarama, a great beach but you've got to watch the surf - there's a dangerous rip when its rough!</p>"},
      {pos: {lat: -33.7653, lng: 151.2704}, info: "<p>This is where BP Solar Australia used to be</p>"}
      ]

  var container = document.getElementById('main-map');
  var mainMap = new MapWrapper(container, LOCATIONS[0]['pos'], 10);

  LOCATIONS.forEach(function(location){
    mainMap.addMarker(location['pos'], location['info']);    
  })

//  mainMap.addClickEvent();



}


window.onload = initialise;