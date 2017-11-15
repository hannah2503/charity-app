angular
  .module('charityApp')
  .controller('shopsIndexController', shopsIndexController);

shopsIndexController.$inject =['Shop'];

function shopsIndexController(Shop){
  const vm = this;
  Shop
    .query()
    .$promise
    .then(shops => {
      vm.shops = shops;
    });
}
