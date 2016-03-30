school.controller('bindingController', ['$scope', function ($scope) {
    $scope.firstName = "Nilesh";
    $scope.lastName = "Patil";
    $scope.fullName = function () {
        return $scope.firstName +' '+ $scope.lastName;
    }    
}]);