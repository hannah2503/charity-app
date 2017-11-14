angular
  .module('charityApp')
  .controller('shopShowController', shopShowController);

shopShowController.$inject = ['Shop','$stateParams', '$state', '$auth'];
function shopShowController(Shop, $stateParams, $state, $auth){
  const vm = this;

  vm.shop = Shop.get($stateParams);
  vm.currentUserId = $auth.getPayload().userId;

  vm.delete = shopDelete;
  vm.handleNewComment = commentCreate;
  vm.commentDelete = commentDelete;

  function shopDelete() {
    Shop
      .remove({id: vm.shop._id})
      .$promise
      .then(()=> {
        $state.go('shopsIndex');
      });
  }

  function getShop(){
    Shop
      .get({ id: $stateParams.id })
      .$promise
      .then(data => {
        console.log('this is the shop data AFTER the delete', data);
        vm.comment = {};
        vm.shop.comments = data.comments;
        console.log(data);
      });
  }

  function commentCreate() {
    Shop
      .addComment($stateParams, vm.comment)
      .$promise
      .then(() => {
        getShop();
      });
  }

  function commentDelete(commentId){

    Shop
      .deleteComment({id: vm.shop._id, commentId: commentId})
      .$promise
      .then(() => {
        getShop();
      });
  }

}
// console.log('delete hit');
// console.log('this is vm', vm);
// console.log('this is vm.shop.comments', vm.shop.comments); // got an array of objects
// console.log('this is vm.shop.comments[0]._id', vm.shop.comments[0]._id); // got a string
// console.log('this is the comment', comment);

// console.log(comment);
// console.log(vm.shop);
// console.log('delete button clicked!');
// Shop.get($stateParams);
