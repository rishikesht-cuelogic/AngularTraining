school.controller('studentController', ['$scope', '$rootScope', 'services','math', function ($scope, $rootScope, services,math) {
    $scope.title = "Students";
    $scope.parentName = $rootScope.parentName;
    $scope.foo = services.foo;
    services.foo = "Updated in student controller";

    $scope.address = {
        city: "Pune",
        state: "Maharashtra",
        zip:"123456"
    }

    $scope.number = 0;
    $scope.square = function () {
        return math.square($scope.number);
    }

    $scope.isSquareEven = function () {
        console.log(math.square($scope.number))
        if (math.square($scope.number) % 2 == 0)
            return true;
        return false;
    }
    $scope.isSquareOdd = function () {
        if (math.square($scope.number) % 2 != 0)
            return true;
        return false;
    }

    $scope.message = "This is default message";
    $scope.message2 = "This is second message";

    setTimeout(function () {        
        $scope.$apply(function () {
            $scope.message2 = "This is new message";
            $scope.message = "You have spend more than 1 second here";
        });
    }, 1000);

}]);