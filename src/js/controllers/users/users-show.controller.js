angular
  .module('charityApp')
  .controller('usersShowController', usersShowController);

usersShowController.$inject = ['$stateParams', 'User', '$state', 'Shop'];
function usersShowController($stateParams, User, $state, Shop) {
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
}
