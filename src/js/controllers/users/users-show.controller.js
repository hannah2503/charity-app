angular
  .module('charityApp')
  .controller('usersShowController', usersShowController);

usersShowController.$inject = [
  '$stateParams',
  'User',
  '$state',
  'Shop',
  '$uibModal'
];
function usersShowController($stateParams, User, $state, Shop, $uibModal) {
  const vm = this;

  vm.shops = Shop.query();

  User.get({ id: $stateParams.id }).$promise.then(user => {
    vm.user = user;
  });

  function openModal() {
    $uibModal.open({
      templateUrl: 'js/views/partials/userDeleteModal.html',
      controller: 'usersDeleteCtrl as vm',
      resolve: {
        user: () => {
          return vm.user;
        }
      }
    });
  }

  vm.open = openModal;
}
