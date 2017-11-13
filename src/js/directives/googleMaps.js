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
      // let text;

      const map = new $window.google.maps.Map(element[0], {
        zoom: 15,
        center: mapCenter
      });

      var infowindow = new $window.google.maps.InfoWindow();

      // const infoWindow = new $window.google.maps.InfoWindow();

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          // infoWindow.setPosition(pos);
          // infoWindow.setContent('Location found.');
          // infoWindow.open(map);
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, map.getCenter());
          // handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        // handleLocationError(false, infoWindow, map.getCenter());
        handleLocationError(false, map.getCenter());
      }


      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
          'Error: The Geolocation service failed.' :
          'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

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

        marker.addListener('click', () => {
          infowindow = new $window.google.maps.InfoWindow({
            content: `
            <div class="infowindow">
              <h3>${data.name}</h3>
              <p><strong>${data.formatted_address}</strong></p>
            </div>`
          });

          createInfoWindow(marker, data);
        });
      }

      var currWindow = false;

      function createInfoWindow(marker) {
        console.log('im hit');

        if(currWindow) currWindow.close();

        currWindow = infowindow;

        infowindow.open(map, marker);
      }

        // var infowindow = new $window.google.maps.InfoWindow();
        //
        // function (place) {
        // $window.google.maps.event.addListener(marker, 'click', function() {
        //   infowindow.setContent('<div>'place.formatted_address'</div>');
        //       infowindow.open(map, this);
        //     });
        //   }





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
