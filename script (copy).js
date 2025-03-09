var markers = [];
var map;

function myMap() {

  var mapProp = {
    center: new google.maps.LatLng(43.4643, -80.5204),
    zoom: 5,
  };

  map = new google.maps.Map(document.getElementById("googleMap"), mapProp);


  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(map, event.latLng.lat, event.latLng.lng, "test")
  });

}

function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(marker);
}

map.addListener('click', function(event) {
  addMarker(event.latLng);
});



