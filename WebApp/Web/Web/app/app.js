'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
  'ui.router',
  'user',
  'home'
]).
config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');  
}]);
