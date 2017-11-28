angular
  .module('charityApp')
  .controller('shopEditController', shopEditController);

shopEditController.$inject = ['Shop', '$stateParams','$state'];

function shopEditController(Shop, $stateParams, $state){

  const vm = this;
  vm.title = 'Edit this Shop';
  vm.shop = Shop.get($stateParams);

<<<<<<< HEAD
  vm.submit = updateShop;

  function updateShop(shop) {
=======
  vm.submit = shop => {
>>>>>>> 33d49f58f26271e84b7abff196dd8053da2c6098
    Shop
      .update({id: shop._id}, shop)
      .$promise
      .then((shop)=> {
        $state.go('shopShow', {id: shop._id});
      });
  }
}
