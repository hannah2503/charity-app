angular
  .module('charityApp')
  .controller('shopFormController', shopFormController);

shopFormController.$inject  = ['Shop', '$state'];

function shopFormController(Shop, $state){
  const vm = this;
  vm.title = 'Add a Shop';

  vm.submit = shopCreate;
  vm.getDetails = getDetails;

  function getDetails() {
    vm.shop = {
      name: vm.details.name,
      formatted_address: vm.details.formatted_address,
      email: vm.details.email,
      international_phone_number: vm.details.international_phone_number,
      bio: vm.details.bio,
      icon: vm.details.icon,
      clothesWanted: vm.details.clothesWanted,
      clothesNotWanted: vm.details.clothesNotWanted,
      place_id: vm.details.place_id,
      lat: vm.details.geometry.location.lat(),
      lng: vm.details.geometry.location.lng()
    };

    shopCreate();
  }

  function shopCreate(){
    Shop
      .save(vm.shop)
      .$promise
      .then(()=> {
        $state.go('shopsIndex');
      });
  }

}
