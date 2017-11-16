angular.module('charityApp').controller('usersDeleteCtrl', usersDeleteCtrl);

usersDeleteCtrl.$inject = [
  '$uibModalInstance',
  'User',
  'user',
  '$state',
  '$stateParams',
  '$auth'
];
function usersDeleteCtrl(
  $uibModalInstance,
  User,
  user,
  $state,
  $stateParams,
  $auth
) {
  const vm = this;

  User.get({ id: $stateParams.id }).$promise.then(user => {
    vm.user = user;
  });

  function closeModal() {
    $uibModalInstance.close();
  }

  vm.close = closeModal;

  function userDelete() {
    vm.user.$remove({ id: vm.user._id }).then(() => {
      $state.go('home');
      $uibModalInstance.close();
    });
  }
  vm.delete = userDelete;
}
