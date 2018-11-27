function initMap() {
	var uluru = {lat: 41.9653, lng: 87.6577};
	var loc1 = {lat: 41.9690 lng: 87.6599};
  var loc2 = {lat: 41.9613, lng: 87.6534};
  var loc3 = {lat: 41.9656, lng: 87.6501};
  var loc4 = {lat: 41.9751, lng: 87.6550};

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
