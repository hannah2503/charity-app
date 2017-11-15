angular
  .module('charityApp')
  .directive('googlePlace', googlePlace);

googlePlace.$inject = ['$window', '$rootScope'];
function googlePlace($window, $rootScope) {
  return {
    link($scope, element) {
      const options = {
      };

      const autoCompleteInput = new $window.google.maps.places.Autocomplete(element[0], options);
      autoCompleteInput.addListener('place_changed', getPlaceData);

      function getPlaceData() {
        const place = autoCompleteInput.getPlace();
        console.log(place);

        const placeData = {
          address: place.formatted_address,
          email: place.place_id

        };

        $rootScope.$broadcast('new place', placeData);

        // $rootScope.$broadcast('new place', {
        //   addressHTML: place.adr_address,
        //   addressFormatted: place.formatted_address,
        //   lat: place.geometry.location.lat(),
        //   lng: place.geometry.location.lng(),
        //   name: place.name,
        //   // photoArray: photoArray,
        //   locationId: place.place_id,
        //   website: place.website
        // });
      }
    }
  };
}
