angular
  .module('charityApp')
  .controller('shopDeleteCtrl', shopDeleteCtrl);

shopDeleteCtrl.$inject = ['$uibModalInstance', 'Shop', 'shop', '$state', '$stateParams', 'currentUserService'];
function shopDeleteCtrl($uibModalInstance, Shop, shop, $state, $stateParams, currentUserService) {
  const vm = this;
  vm.shop = shop;
  vm.user = currentUserService.currentUser;
  Shop.get({ id: $stateParams.id }).$promise.then(shop => {
    vm.shop = shop;
  });

  function closeModal() {
    $uibModalInstance.close();
  }

  vm.close = closeModal;

  function shopDelete() {
    vm.shop
      .$remove()
      .then(() => {
        $state.go('shopsIndex');
        $uibModalInstance.close();
      });

  }
  vm.delete = shopDelete;
}
