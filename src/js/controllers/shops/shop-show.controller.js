angular
  .module('charityApp')
  .controller('shopShowController', shopShowController);

shopShowController.$inject = ['$stateParams'];
function shopShowController($stateParams){
  const vm = this;
  console.log(vm.shop[$stateParams.id]);
  return vm.shop[$stateParams.id];
}
