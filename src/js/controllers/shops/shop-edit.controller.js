angular
  .module('charityApp')
  .controller('shopEditController', shopEditController);

shopEditController.$inject = ['Shop', '$stateParams','$state'];

function shopEditController(Shop, $stateParams, $state){

  const vm = this;
  vm.title = 'Edit this Shop';
  vm.shop = Shop.get($stateParams);
  vm.submit = shop => {
    Shop
      .update({id: shop._id}, shop)
      .$promise
      .then((shop)=> {

        $state.go('shopShow', {id: shop._id});
      });
  };
}
