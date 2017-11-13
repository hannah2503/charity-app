angular
  .module('charityApp')
  .config(Router);

Router.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];

function Router(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/statics/home.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/authentications/register.html',
      controller: 'registerController as vm'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/authentications/login.html',
      controller: 'loginController as vm'
    })
    .state('usersIndex', {
      url: '/users',
      templateUrl: 'js/views/users/index.html',
      controller: 'usersIndexController as vm'
    })
    .state('userShow', {
      url: '/users/:id',
      templateUrl: 'js/views/shops/profile.html',
      controller: 'userShowController as vm'
    })
    .state('shopsIndex', {
      url: '/shops',
      templateUrl: 'js/views/shops/index.html',
      controller: 'shopsIndexController as vm'
    })
    .state('shopShow',{
      url: '/shops/:id',
      templateUrl: 'js/views/shops/shop.html',
      controller: 'shopShowController as vm'
    })
    //form for creating and editing a shop
    .state('shopForm', {
      url: '/shops/form',
      templateUrl: 'js/views/shops/form.html',
      controller: 'shopFormController as vm'
    });

  $urlRouterProvider.otherwise('/');
}
