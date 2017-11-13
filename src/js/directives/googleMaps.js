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
        center: mapCenter
      });

      const request = {
        location: mapCenter,
        radius: '500',
        query: 'charity shop'
      };

      const service = new $window.google.maps.places.PlacesService(map);
      service.textSearch(request, callback);

      function callback(results, status) {
        if (status === $window.google.maps.places.PlacesServiceStatus.OK) {
          results.forEach(result => {
            createMarker(result);
          });
        }
      }

      function createMarker(data) {
        const marker = new $window.google.maps.Marker({
          position: new $window.google.maps.LatLng(data.geometry.location.lat(), data.geometry.location.lng()),
          map: map
        });
      }
    }
  };
}

//   const request = {
//     location: center,
//     radius: '500',
//     type: [ 'restaurant']
//   };
//   service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, callback);
// }
// function callback(results, status) { if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       const place = results[i];
//       createMarker(results[i])
//   }
// }
// }
