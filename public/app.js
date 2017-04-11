var initialise = function(){

 var LOCATIONS_ARRAY = [
      {pos: {lat: -33.9004, lng: 151.2704}, info: "<p>This is Tamarama, a great beach but you've got to watch the surf - there's a dangerous rip when its rough!</p>"},
      {pos: {lat: -33.8568, lng: 151.2153}, info: "<p>Sydney Opera House!</p>"},
      {pos: {lat: -33.8915, lng: 151.2767}, info: "<p>Bondi Beach!</p>"},
      {pos: {lat: -33.7653, lng: 151.2704}, info: "<p>BP Solar Australia used to be here</p>"},
      {pos: {lat: 55.9533, lng: -3.1883}, info: "<p>Welome to Edinburgh</p>"}
      ]

  var container = document.getElementById('main-map');
  var mainMap = new MapWrapper(container, LOCATIONS_ARRAY[0]['pos'], 10);

  LOCATIONS_ARRAY.forEach(function(location){
    mainMap.addMarker(location['pos'], location['info']);    
  })

}



window.onload = initialise;