school.controller('studentController', ['$scope', '$rootScope', 'services', function ($scope, $rootScope, services) {
    $scope.title = "Students";
    $scope.parentName = $rootScope.parentName;
    $scope.foo = services.foo;
    services.foo = "Updated in student controller";
}]);