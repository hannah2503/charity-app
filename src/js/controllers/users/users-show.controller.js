angular
  .module('charityApp')
  .controller('userShowController', userShowController);

userShowController.$inject = ['$stateParams'];
function userShowController($stateParams){
  const vm = this;
  console.log(vm.user[$stateParams.id]);
  return vm.user[$stateParams.id];

}
