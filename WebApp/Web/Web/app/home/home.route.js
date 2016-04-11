angular.module('home.route', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.
        state('home', {
            url: '/home',
            templateUrl: 'app/home/views/home.html',
            controller: 'homeCtrl'
        })
}]);