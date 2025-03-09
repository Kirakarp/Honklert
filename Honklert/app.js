const { Map } = await google.maps.importLibrary("maps");
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

var gooseImg = document.createElement("img");
gooseImg.src = "resizedMarker.png";

const hoverImg = document.createElement("img3");
hoverImg.src = "hover.png";

const map = new Map(document.getElementById("map"), {
  zoom: 14,
  center: { lat: 43.4643, lng: -80.5204 },
  mapId: "e3577d2e1a49ebd1",
});

// could just populate w/ a list of markers

const waterlooMarker = new AdvancedMarkerElement({
  map: map,
  position: { lat: 43.4643, lng: -80.5204 },
  id: "Waterloo University",
  content: gooseImg,
  gmpClickable: true,
});

const waterlooMarker_2 = new AdvancedMarkerElement({
  map: map,
  position: { lat: 43.47312529299179, lng: -80.54502621055302 },
  id: "Matthews Hall",
  content: gooseImg,
  gmpClickable: true,
});

const waterlooMarker_3 = new AdvancedMarkerElement({
  map: map,
  position: { lat: 43.466571492664045, lng: -80.53398300288734 },
  id: "Waterloo Park",
  content: gooseImg,
  gmpClickable: true,
});

var gmarkers = [];
var latLng;
function addMarker(latLng) {
  var marker = new AdvancedMarkerElement({
    map: map,
    position: latLng,
    content: gooseImg,
    gmpClickable: true,
  });
  map.setCenter(latLng);
}

// function hideHover() {
//   const sighting = document.getElementById(hoverImg);
//   if (sighting.style.display === "none") {
//     sighting.style.display = "block";
//   } else {
//     sighting.style.display = "none";
//   }
// }

map.addListener("click", function (event) {
  addMarker(event.latLng);
  gmarkers.push(latLng);
});

const infowindow = new google.maps.InfoWindow({
  ///content: '<div id="myInfoWinDiv">' + myContent + "</div>",
  content: "<div style='display: inline-block'><img src='hover.png'></div>",
  map: map,
  anchor: waterlooMarker_2,
});

map.addListener(gmarkers[0], "click", function () {
  alert("it works");
  infowindow.open();
});
