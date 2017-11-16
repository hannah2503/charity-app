UsersDeleteCtrl.$inject = ['$uibModalInstance', 'user', '$state'];
function UsersDeleteCtrl($uibModalInstance, user, $state) {
  var vm = this;
  vm.user = user;

  function closeModal() {
    $uibModalInstance.close();
  }

  vm.close = closeModal;

  function userDelete() {
    vm.user
      .$remove()
      .then(() => {
        $state.go('home');
        $uibModalInstance.close();
      });
  }

  vm.delete = userDelete;
}
