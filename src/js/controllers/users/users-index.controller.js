angular
  .module('charityApp')
  .controller('usersIndexController', usersIndexController);

usersIndexController.$inject = [
  'User'
];
function usersIndexController(
  User) {
  const vm = this;
  vm.users = User.query();
}
