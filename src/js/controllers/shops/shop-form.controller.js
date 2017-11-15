angular
  .module('charityApp')
  .controller('shopFormController', shopFormController);

shopFormController.$inject  = ['Shop', '$state'];

function shopFormController(Shop, $state){
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
