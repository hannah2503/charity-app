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
<<<<<<< HEAD
        $state.go('userShow', { id: response.data.user._id });
=======
        //$state.go('userShow');
        $state.go('usersIndex');
>>>>>>> 8cf444cc8b1c66968c15612ad04f4f2cec2dba94
      });
  }
}
