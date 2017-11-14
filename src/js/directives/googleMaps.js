angular
  .module('charityApp')
  .directive('googleMap', googleMap);



googleMap.$inject = ['$window'];
function googleMap($window) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    link(scope, element) {
      const mapCenter = new $window.google.maps.LatLng(51.5, -0.07);

      const map = new $window.google.maps.Map(element[0], {
        zoom: 15,
        center: mapCenter,
        radius: 5000
      });

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

      // const request = {
      //   location: mapCenter,
      //   radius: '1000'
      //   // query: 'charity shop'
      // };
      //
      // // const service = new $window.google.maps.places.PlacesService(map);
      // // service.textSearch(request, callback);
      // 
      function callback(results, status) {
        if (status === $window.google.maps.places.PlacesServiceStatus.OK) {
          results.forEach(shop => {
            createMarker(shop);
          });
        }
      }


      function createMarker(shop) {
        const latLng = {lat: shop.latitude, lng: shop.longitude };
        const marker = new $window.google.maps.Marker({
          position: latLng,
          map: map
        });


        marker.addListener('click', () => {
          infowindow = new $window.google.maps.InfoWindow({
            content: `
            <div class="infowindow">
              <h3>${shop.name}</h3>
              <p><strong>${shop.clothesWanted}</strong></p>
              <p><strong>${shop.clothesNotWanted}</strong></p>
            </div>`
          });

          createInfoWindow(marker, shop);
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
