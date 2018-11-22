function initMap() {
  var map = {
    center: new google.maps.LatLang(11.6, 37.3833),
    zoom: 8,
};
  var map = new google.maps.Map(document.getElementById('googleMap'), map);
}
