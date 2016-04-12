'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
  'ui.router',
  'user',
  'home'
]).
config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');  
}])
.run(function (userService, $location, $rootScope) {
    if (userService.getCurrentUser() && userService.getCurrentUser().email) {
        $rootScope.loggedIn = true;
    }
    else
        $location.path("/login");
});