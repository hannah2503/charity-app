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
    .state('usersIndex', {
      url: '/users',
      templateUrl: 'js/views/users/index.html',
      controller: 'usersIndexController as vm'
    })
    .state('shopsIndex', {
      url: '/shops',
      templateUrl: 'js/views/shops/index.html',
      controller: 'shopsIndexController as vm'
    })
    .state('shopForm', {
      url: '/shops/form',
      templateUrl: 'js/views/shops/form.html',
      controller: 'shopFormController as vm'
    })
    .state('userShow', {
      url: '/users/:id',
      templateUrl: 'js/views/users/show.html',
      controller: 'usersShowController as vm'
    })
    .state('shopShow',{
      url: '/shops/:id',
      templateUrl: 'js/views/shops/show.html',
      controller: 'shopShowController as vm'
    })
    .state('shopEdit',{
      url: '/shops/:id/form',
      templateUrl: 'js/views/shops/form.html',
      controller: 'shopEditController as vm'
    })
    .state('userEdit',{
      url: '/users/:id/form',
      templateUrl: 'js/views/users/form.html',
      controller: 'usersEditController as vm'
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
    });

  $urlRouterProvider.otherwise('/');
}
