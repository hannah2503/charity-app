angular
  .module('charityApp')
  .controller('shopFormController', shopFormController);

shopFormController.$inject  = ['$stateParams'];
function shopFormController($stateParams){
  const vm = this;
  console.log(vm.shop[$stateParams]);
  return vm.shop[$stateParams];
}
