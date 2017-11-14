angular
  .module('charityApp')
  .controller('shopFormController', shopFormController);

shopFormController.$inject  = ['Shop', '$state', '$rootScope'];

function shopFormController(Shop, $state, $rootScope){
  const vm = this;
  vm.title = 'Add a Shop';


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
