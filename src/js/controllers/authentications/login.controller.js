angular
  .module('charityApp')
  .controller('loginController', loginController);

loginController.$inject = [
  '$auth',
  '$state',
  'currentUserService'
];

function loginController(
  $auth,
  $state,
  currentUserService) {
  const vm = this;

  vm.submitForm = login;

  function login() {
    $auth
      .login(vm.user)
      .then(() => {
        currentUserService.getUser();
        //$state.go('userShow');
        $state.go('usersIndex');
      });
  }
}
