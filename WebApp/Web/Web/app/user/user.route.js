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
    .state('editUser', {
        url: '/edit/:id',
        templateUrl: 'app/user/views/edit.html',
        controller: 'userCtrl'
    })
    .state('createUser', {
        url: '/create',
        templateUrl: 'app/user/views/create.html',
        controller: 'userCtrl'
    })
}]);
