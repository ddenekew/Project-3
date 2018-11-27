function initMap() {
	var uluru = {lat: 42.02142, lng: -87.6645018};
	var loc1 = {lat: 41.8336417, lng: -87.6259347};
  var loc2 = {lat: 42.0012436, lng: -87.6624455};
  var loc3 = {lat: 40.9434769, lng: -90.3723725};
  var loc4 = {lat: 41.9231283, lng: -87.6564171};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: (uluru, loc1, loc2, loc3, loc4),
		map: map
	});
}
function goto(location){
	map.panTo(location);
	map.setzoom(15);
}
