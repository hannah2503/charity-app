angular
  .module('charityApp')
  .controller('userShowController', userShowController);

userShowController.$inject = ['$stateParams', 'User'];
function userShowController($stateParams, User){
  const vm = this;

  vm.user = User.get($stateParams);
}
