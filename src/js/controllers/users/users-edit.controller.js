angular
  .module('charityApp')
  .controller('usersEditController', usersEditController);

usersEditController.$inject = ['User', '$stateParams','$state'];

function usersEditController(User, $stateParams, $state){

  const vm = this;
  vm.title = 'Edit your profile';
  vm.user = User.get($stateParams);
  vm.submit = user => {
    User
      .update({id: user._id}, user)
      .$promise
      .then((user)=> {

        $state.go('userShow', {id: user._id});
      });
  };
}
