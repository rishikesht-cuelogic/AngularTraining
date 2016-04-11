angular.module('user.controller',['services'])
      .controller('userCtrl',['$scope','userService',UserController])
       .controller('loginCtrl', ['$scope', '$state','$rootScope', 'userService', LoginController])

function UserController($scope,userService) {
    $scope.users = userService.get();

};

function LoginController($scope, $state, $rootScope, userService) {
    $scope.userName = "";
    $scope.password = "";
    $scope.login = function () {
        if (userService.authenticate($scope.userName, $scope.password)) {
            $rootScope.email = $scope.userName;
            $state.go('home'); // go to login
        }
        else {
            alert("Failed to login");
        }
    }

    $scope.logout = function () {
        userService.clearSession();
        $state.go('login'); // go to login
    }
}