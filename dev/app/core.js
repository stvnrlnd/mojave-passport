(function() {
  'use strict';
  angular.module('mojave', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'templates/public/home.html'
          })
          .state('register', {
            url: '/register',
            templateUrl: 'templates/accounts/register.html'
          })
          .state('login', {
            url: '/login',
            templateUrl: 'templates/accounts/login.html'
          })
          .state('settings', {
            url: '/settings',
            templateUrl: 'templates/accounts/settings.html'
          });
        $urlRouterProvider
          .otherwise('/');
    });
})();
