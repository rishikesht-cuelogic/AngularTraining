angular.module('user.route', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.
        state('login', {
            url: '/login',
            templateUrl: 'app/user/views/login.html',
            controller: 'loginCtrl'
        })
     .state('users', {
         url: '/users',
         templateUrl: 'app/user/views/user.html',
         controller: 'userCtrl'
     })
}]);
