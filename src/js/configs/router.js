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
    //form for creating and editing a shop
    .state('shopForm', {
      url: '/shops/form',
      templateUrl: 'js/views/shops/form.html',
      controller: 'shopFormController as vm'
    })
    .state('userShow', {
      url: '/users/:id',
<<<<<<< HEAD
      templateUrl: 'js/views/users/show.html',
=======
      templateUrl: 'js/views/shops/show.html',
>>>>>>> 8cf444cc8b1c66968c15612ad04f4f2cec2dba94
      controller: 'userShowController as vm'
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
