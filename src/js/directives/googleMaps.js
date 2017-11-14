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
        radius: 100000
      });

      $timeout(loopOverShops, 100);

      function loopOverShops() {
        scope.shops.forEach(shop => {
          createMarker(shop);
        });
      }



      // var infowindow = new $window.google.maps.InfoWindow();
      // createMarker();
      //
      //
      //
      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(function(position) {
      //     var pos = {
      //       lat: position.coords.latitude,
      //       lng: position.coords.longitude
      //     };
      //     map.setCenter(pos);
      //   }, function() {
      //     handleLocationError(true, map.getCenter());
      //   });
      // } else {
      //   handleLocationError(false, map.getCenter());
      // }
      //
      //
      // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      //   infoWindow.setPosition(pos);
      //   infoWindow.setContent(browserHasGeolocation ?
      //     'Error: The Geolocation service failed.' :
      //     'Error: Your browser doesn\'t support geolocation.');
      //   infoWindow.open(map);
      //
      // }

      // const request = {
      //   location: mapCenter,
      //   radius: '1000',
      //   marker: callback()
      // };

      // const service = new $window.google.maps.places.PlacesService(map);
      // service.textSearch(request, callback);

      // function callback(shop) {
      //   console.log('callback');
      //   // if (status === $window.google.maps.places.PlacesServiceStatus.OK) {
      //   shop.forEach(shop => {
      //     createMarker(shop);
      //   });

      // }


      function createMarker(shop) {
        const latLng = { lat: parseFloat(shop.latitude), lng: parseFloat(shop.longitude) };
        const marker = new $window.google.maps.Marker({
          position: latLng,
          map: map
        });

        // marker.addListener('click', () => {
        //   infowindow = new $window.google.maps.InfoWindow({
        //     content: `
        //     <div class="infowindow">
        //       <h3>${vm.shop.name}</h3>
        //       <p><strong>${vm.shop.clothesWanted}</strong></p>
        //       <p><strong>${vm.shop.clothesNotWanted}</strong></p>
        //     </div>`
        //   });
        //
        //   createInfoWindow(marker, vm.shop);
        // });
      }
      //
      // var currWindow = false;
      //
      // function createInfoWindow(marker) {
      //   console.log('im hit');
      //
      //   if(currWindow) currWindow.close();
      //
      //   currWindow = infowindow;
      //
      //   infowindow.open(map, marker);
      // }

    }
  };
}
