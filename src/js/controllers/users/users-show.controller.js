angular
  .module('charityApp')
  .controller('usersShowController', usersShowController);

usersShowController.$inject = ['$stateParams', 'User'];
function usersShowController($stateParams, User){
  const vm = this;

  User
    .get({id: $stateParams.id})
    .$promise
    .then(user => {
      vm.user = user;
    });
}
