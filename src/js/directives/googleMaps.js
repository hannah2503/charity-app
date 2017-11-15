angular
  .module('charityApp')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window', '$timeout'];
function googleMap($window, $timeout) {

  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      shops: '='
    },
    link(scope, element) {
      const mapCenter = new $window.google.maps.LatLng(51.5, -0.07);

      const map = new $window.google.maps.Map(element[0], {
        zoom: 15,
        center: mapCenter,
        radius: 5000
      });

      $timeout(loopOverShops, 100);

      function loopOverShops() {
        scope.shops.forEach(shop => {
          console.log(shop);
          createMarker(shop);
        });
      }

      var infowindow = new $window.google.maps.InfoWindow();

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, map.getCenter());
        });
      } else {
        handleLocationError(false, map.getCenter());
      }


      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
          'Error: The Geolocation service failed.' :
          'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);

      }

      function createMarker(shop) {
        const latLng = { lat: parseFloat(shop.lat), lng: parseFloat(shop.lng) };
        const marker = new $window.google.maps.Marker({
          position: latLng,
          map: map
        });

        marker.addListener('click', () => {
          infowindow = new $window.google.maps.InfoWindow({
            content: `
            <div class="infowindow">
              <h3>${shop.name}</h3>
              <p><strong>Needed: ${shop.clothesWanted}</strong></p>
              <p><strong>Not needed: ${shop.clothesNotWanted}</strong></p>
            </div>`
          });

          createInfoWindow(marker, shop);
          // getLngLat(shop);
        });
      }

      var currWindow = false;

      function createInfoWindow(marker) {
        console.log('im hit');

        if(currWindow) currWindow.close();

        currWindow = infowindow;

        infowindow.open(map, marker);
      }

    }
  };
}
