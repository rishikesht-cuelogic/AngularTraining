school.controller('parentController', ['$scope', '$rootScope', 'services', function ($scope, $rootScope, services) {
    $scope.name = "Parent";
    $rootScope.parentName = "I am parent";
    $scope.foo = services.foo;
}]);