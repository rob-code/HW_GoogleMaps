var MapWrapper = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });

}

MapWrapper.prototype = {

  addMarker: function(coords, contentString) {

    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });

    var infoWindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function() {
          infoWindow.open(this.googleMap, marker);
        });
  },

  addClickEvent: function() {
  
    var contentString = "<p>I don't know where you are but you clicked here</p>"

    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var coords = {lat: event.latLng.lat(), lng: event.latLng.lng()};
      this.addMarker(coords, contentString);
    }.bind(this))
  }


}


