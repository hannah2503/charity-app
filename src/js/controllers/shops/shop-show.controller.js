angular
  .module('charityApp')
  .controller('shopShowController', shopShowController);

shopShowController.$inject = ['Shop','$stateParams', '$state', 'User'];
function shopShowController(Shop, $stateParams, $state, User){
  const vm = this;

  vm.shop = Shop.get($stateParams);

<<<<<<< HEAD
  vm.user = User.get($stateParams);

  vm.delete = () => {
=======
  vm.delete = shopDelete;

  function shopDelete() {
>>>>>>> 8cf444cc8b1c66968c15612ad04f4f2cec2dba94
    Shop
      .remove({id: vm.shop._id})
      .$promise
      .then(()=> {
        $state.go('shopsIndex');
      });
    console.log( 'deleted');
  }

  vm.handleNewComment = () => {
    Shop
      .addComment($stateParams, vm.comment)
      .$promise
      .then(data => {
        vm.comment = null;
        vm.shop.comments = data.comments;
      });
  };

  vm.deleteComment = commentsDelete;

  function commentsDelete(comment){
    console.log(comment);
    Shop
      .deleteComment({id: $stateParams.id, commentId: comment._id})
      .$promise
      .then(() => {
        console.log('delete button clicked!');
        Shop.query();
      });
  }

}
