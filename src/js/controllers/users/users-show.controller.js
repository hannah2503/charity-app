angular
  .module('charityApp')
  .controller('userShowController', userShowController);

userShowController.$inject = ['$state'];
function userShowController($state){
  const vm = this;
  vm.back = function(){
    $state.go('home');
  };
}
