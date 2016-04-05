var school = angular.module('school', ['ui.router']);

school.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.
        state('home', {
            url: '/home',
            templateUrl: 'app/views/home.html'
        })
    .state('student', {
        url: '/student',
        templateUrl: 'app/views/student.html'
    })
    .state('student.list', {
        url: '/student/list',
        templateUrl: 'app/views/studentList.html'
    })
    .state('parent', {
        url: '/parent',
        templateUrl: 'app/views/parent.html'
    })
}]);


