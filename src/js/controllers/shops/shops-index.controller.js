angular
  .module('charityApp')
  .controller('shopsIndexController', shopsIndexController);

shopsIndexController.$inject =['Shop','filterFilter', '$scope'];

function shopsIndexController(Shop, filterFilter, $scope){
  const vm = this;
<<<<<<< HEAD
  Shop
    .query()
    .$promise
    .then(shops => {
      vm.shops = shops;
    });
=======
  vm.shops = Shop.query();

  function filterShop() {
    const params = { name: vm.q };

    vm.filtered = filterFilter(vm.shops, params);
  }

  $scope.$watchGroup([
    () => vm.q
  ], filterShop);

  vm.filterShop = filterShop;
>>>>>>> 4552dad5235fdb0d57113964f8fd91215112d3ba
}
