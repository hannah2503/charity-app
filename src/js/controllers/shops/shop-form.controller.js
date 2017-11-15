angular
  .module('charityApp')
  .controller('shopFormController', shopFormController);

shopFormController.$inject  = ['Shop', '$state', '$rootScope', '$scope'];

function shopFormController(Shop, $state, $rootScope, $scope){
  const vm = this;
  vm.title = 'Add a Shop';

  $rootScope.$on('new place', (e, placeData) => {
    vm.shop = placeData;
    $scope.$apply();
  });

  vm.submit = shop => {
    console.log('submitted shop!');
    Shop
      .save(shop)
      .$promise
      .then(()=> {
        $state.go('shopsIndex');
      });

  };
}

// vm.submit = shopCreate;
//
// function shopCreate(shop){
//   console.log('submitted shop!');
//   Shop
//     .save(shop)
//     .$promise
//     .then(()=> {
//       $state.go('shopsIndex');
//     });
//
