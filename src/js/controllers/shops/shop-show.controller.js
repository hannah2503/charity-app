angular
  .module('charityApp')
  .controller('shopShowController', shopShowController);

shopShowController.$inject = ['Shop','$stateParams', '$state'];
function shopShowController(Shop, $stateParams, $state){
  const vm = this;

  vm.shop = Shop.get($stateParams);

  vm.delete = shopDelete;
  vm.handleNewComment = commentCreate;

  function shopDelete() {
    Shop
      .remove({id: vm.shop._id})
      .$promise
      .then(()=> {
        $state.go('shopsIndex');
      });
  }

  function commentCreate() {
    Shop
      .addComment($stateParams, vm.comment)
      .$promise
      .then(data => {
        vm.comment = {};
        vm.shop.comments = data.comments;
      });
  }

  // vm.deleteComment = commentsDelete;
  //
  // function commentsDelete(){
  //   Shop
  //     .deleteComment($stateParams, vm.comment)
  //     .$promise
  //     .then(() => {
  //       console.log('delete button clicked!');
  //       Shop.query();
  //     });
  // }

}
