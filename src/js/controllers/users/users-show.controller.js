angular
  .module('charityApp')
  .controller('usersShowController', usersShowController);

usersShowController.$inject = ['$stateParams', 'User', '$state', 'Shop', '$uibModal'];
function usersShowController($stateParams, User, $state, Shop, $uibModal) {
  const vm = this;

  vm.delete = userDelete;
  vm.shops = Shop.query();

  function userDelete() {
    User.remove({ id: vm.user._id }).$promise.then(() => {
      $state.go('home');
    });
  }

  User.get({ id: $stateParams.id }).$promise.then(user => {
    vm.user = user;
  });

  function openModal() {
    $uibModal.open({
      templateUrl: 'js/views/partials/userDeleteModal.html',
      controller: 'UsersDeleteCtrl as vm',
      resolve: {
        user: () => {
          return vm.user;
        }
      }
    });
  }

  vm.open = openModal;
}
