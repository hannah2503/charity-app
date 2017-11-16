angular
  .module('charityApp')
  .controller('shopsIndexController', shopsIndexController);

shopsIndexController.$inject = ['Shop', 'filterFilter', '$scope'];

function shopsIndexController(Shop, filterFilter, $scope){
  const vm = this;

  vm.shops = Shop.query();

  function filterShop() {
    const params = { name: vm.q };
    vm.filtered = filterFilter(vm.shops, params);
  }

  $scope.$watchGroup([
    () => vm.q
  ], filterShop);

  vm.filterShop = filterShop;
}
