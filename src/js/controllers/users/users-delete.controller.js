angular
  .module('charityApp')
  .controller('usersDeleteCtrl', usersDeleteCtrl);

usersDeleteCtrl.$inject = ['$uibModalInstance', 'User', 'user', '$state', '$stateParams', '$auth', '$rootScope'];
function usersDeleteCtrl($uibModalInstance, User, user, $state, $stateParams, $auth, $rootScope) {
  const vm = this;
  vm.user = user;
  vm.logout = logout;
  User.get({ id: $stateParams.id }).$promise.then(user => {
    vm.user = user;
  });

  function closeModal() {
    $uibModalInstance.close();
  }

  vm.close = closeModal;

  function userDelete() {
    vm.user
      .$remove()
      .then(() => {
        $uibModalInstance.close();
        logout();
        $rootScope.$broadcast('loggedOut');
      });

  }

  function logout() {
    $auth.logout();
    $state.go('home');
  }
  vm.delete = userDelete;
}
