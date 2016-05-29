(function() {
  'use strict';
  angular.module('mojave', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'templates/public/home.html'
          });
        $urlRouterProvider
          .otherwise('/');
    });
})();
