angular
  .module('charityApp')
  .controller('shopShowController', shopShowController);

shopShowController.$inject = [
  'Shop',
  '$stateParams',
  '$state',
  '$auth',
  '$uibModal'
];
function shopShowController(Shop, $stateParams, $state, $auth, $uibModal) {
  const vm = this;

  Shop.get({ id: $stateParams.id }).$promise.then(shop => {
    vm.shop = shop;
  });
  vm.currentUserId = $auth.getPayload().userId;

  vm.delete = shopDelete;
  vm.handleNewComment = commentCreate;
  vm.commentDelete = commentDelete;

  function shopDelete() {
    Shop.remove({ id: vm.shop._id }).$promise.then(() => {
      $state.go('shopsIndex');
    });
  }

  function getShop() {
    Shop.get({ id: $stateParams.id }).$promise.then(data => {
      console.log('this is the shop data AFTER the delete', data);
      vm.comment = {};
      vm.shop.comments = data.comments;
      console.log(data);
    });
  }

  function commentCreate() {
    Shop.addComment($stateParams, vm.comment).$promise.then(() => {
      getShop();
    });
  }

  function commentDelete(commentId) {
    Shop.deleteComment({ id: vm.shop._id, commentId: commentId }).$promise.then(
      () => {
        getShop();
      }
    );
  }

  function openModal() {
    $uibModal.open({
      templateUrl: 'js/views/partials/shopDeleteModal.html',
      controller: 'shopDeleteCtrl as vm',
      resolve: {
        shop: () => {
          return vm.shop;
        }
      }
    });
  }

  vm.open = openModal;
}
