angular
  .module('charityApp')
  .controller('usersShowController', usersShowController);

usersShowController.$inject = ['$stateParams', 'User'];
function usersShowController($stateParams, User){
  const vm = this;

  vm.user = User.get($stateParams);
}
