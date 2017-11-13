angular
  .module('charityApp')
  .controller('shopsIndexController', shopsIndexController);

shopsIndexController.$inject =['Shop'];

function shopsIndexController(Shop){
  const vm = this;
  vm.shops = Shop.query();
  console.log(vm.shops);
}
