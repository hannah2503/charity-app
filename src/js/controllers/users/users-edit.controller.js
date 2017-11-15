angular
  .module('charityApp')
  .controller('usersEditController', usersEditController);

usersEditController.$inject = ['User', '$stateParams','$state'];

function usersEditController(User, $stateParams, $state){

  const vm = this;
  vm.title = 'Edit your profile';
  User
    .get({id: $stateParams.id})
    .$promise
    .then(user => {
      vm.user = user;
    });
  vm.submit = () => {
    User
      .update({id: $stateParams.id}, vm.user)
      .$promise
      .then(()=> {
        $state.go('userShow', {id: $stateParams.id});
      });
  };
}
