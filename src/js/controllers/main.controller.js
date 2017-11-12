angular
  .module('charityApp')
  .controller('mainController', mainController);

mainController.$inject = [
  '$state',
  '$rootScope',
  'currentUserService'
];
function mainController(
  $state,
  $rootScope,
  currentUserService) {
  const vm = this;

  vm.logout = logout;

  $rootscope.$on('loggedIn', () => {
    vm.user = currentUserService.currentUser;
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });

  function logout() {
    currentUserService.removeUser(); 
  }
}
