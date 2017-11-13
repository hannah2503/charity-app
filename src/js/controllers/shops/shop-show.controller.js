angular
  .module('charityApp')
  .controller('shopShowController', shopShowController);

shopShowController.$inject = ['Shop','$stateParams', '$state', 'User'];
function shopShowController(Shop, $stateParams, $state, User){
  const vm = this;

  vm.shop = Shop.get($stateParams);

  vm.user = User.get($stateParams);

  vm.delete = () => {
    Shop
      .remove({id: vm.shop._id})
      .$promise
      .then(()=> {
        $state.go('shopsIndex');
      });
    console.log( 'deleted');
  };

  vm.handleNewComment = () => {
    Shop
      .addComment($stateParams, vm.comment)
      .$promise
      .then(data => {
        vm.comment       = null;
        vm.shop.comments = data.comments;
      });
  };
}
