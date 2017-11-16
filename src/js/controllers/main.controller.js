angular
  .module('charityApp')
  .controller('mainController', mainController);

mainController.$inject = [
  '$state',
  '$scope',
  '$location',
  '$rootScope',
  'currentUserService'
];
function mainController(
  $state,
  $scope,
  $location,
  $rootScope,
  currentUserService) {
  const vm = this;

  vm.logout = logout;

  $rootScope.$on('loggedIn', () => {
    vm.user = currentUserService.currentUser;
  });

  $scope.currentPath = $location.path();

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('home');
  });

  function logout() {
    currentUserService.removeUser();
  }
}
