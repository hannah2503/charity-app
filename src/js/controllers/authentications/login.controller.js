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
      .then(response => {
        currentUserService.getUser();
        $state.go('userShow', { id: response.data.user._id });
      });
  }

  vm.logout = logout;

  function logout() {
    $auth.logout();
    $state.go('login');
  }
}
