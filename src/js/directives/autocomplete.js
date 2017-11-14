angular
  .module('charityApp')
  .directive('googlePlace', googlePlace);

googlePlace.$inject = ['$window', '$rootScope'];

function googlePlace($window, $rootScope) {

  const directive = {
    restrict: 'E',
    replace: true,
    template: '<input type="text" id="google-places" style="width: 100%" />',
    scope: {
    },
    link($scope, element) {
      var autocomplete = new $window.google.maps.places.Autocomplete(element[0], {
        types: ['establishment'],
        componentRestrictions: {country: 'en'}
      });
      autocomplete.addListener('place_changed', callback);

      function callback() {
        var place = autocomplete.getPlace();
        // var photoArray = [];
        // if (place.photos) {
        //   for (var i = 0; i < place.photos.length; i++) {
        //     var currentPhoto = place.photos[i].getUrl({'maxWidth': 1920, 'maxHeight': 500});
        //     photoArray.push(currentPhoto);
        //   }
        // } else {
        //   photoArray.push('No photos for this studio');
        // }

        $rootScope.$broadcast('new place', {
          addressHTML: place.adr_address,
          addressFormatted: place.formatted_address,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          name: place.name,
          // photoArray: photoArray,
          locationId: place.place_id,
          website: place.website
        });
      }
    }
  };

  return directive;
}
