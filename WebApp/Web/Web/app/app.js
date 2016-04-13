'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
  'ui.router',
  'directives',
  'user',
  'home'
])
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/home');
    $httpProvider.interceptors.push('authenticationHttpInterceptor');
}])
    .factory('authenticationHttpInterceptor', function (userService, $location) {
        return {
            // optional method
            'request': function (config) {
                var authenticated = userService.isAuthenticated();
                if (($location.path() != "/login") && !authenticated)
                    $location.path("/login");
                return config;
            }
        };
    });


