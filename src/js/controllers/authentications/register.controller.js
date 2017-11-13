angular
  .module('charityApp')
  .controller('registerController', registerController);

registerController.$inject = [
  '$auth',
  '$state',
  'currentUserService'
];

function registerController(
  $auth,
  $state,
  currentUserService) {
  const vm = this;

  vm.submitForm = register;

  function register() {
    $auth
      .signup(vm.user)
      .then(() =>
        $auth.login(vm.user))
      .then(response => {
        currentUserService.getUser();
        $state.go('userShow', { id: response.data.user._id });
      });
  }
}
