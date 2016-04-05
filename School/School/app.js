var school = angular.module('school', ['ngRoute']);

school.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/student', {
        templateUrl: 'app/views/student.html',
        controller: 'studentController'
    })
}]);


