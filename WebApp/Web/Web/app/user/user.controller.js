angular.module('user.controller', ['services'])
      .controller('userCtrl', ['$scope', '$state', '$stateParams', 'userService', UserController])
       .controller('loginCtrl', ['$scope', '$state','$rootScope', 'userService', LoginController])

function UserController($scope, $state, $stateParams, userService) {
    
    $scope.user = {};
    var newUser = true;
    $scope.title = "New User";
    if ($stateParams.id) {
        $scope.title = "Edit User";
        newUser = false;
        $scope.user = userService.getUserById($stateParams.id);
    }
    $scope.update = function () {
        var u = $scope.user;
        if(!newUser)
            userService.updateUser(u.id, u.name, u.email, u.address, u.age, u.gender, u.education);
        else
            userService.addUser(u.name, u.email, u.password, u.address, u.age, u.gender, u.education);

        $state.go('home'); 
    }
    $scope.cancel = function () {
        history.back();
    }
    
};

function LoginController($scope, $state, $rootScope, userService) {
    $scope.currentUser = userService.getCurrentUser();
    $scope.userName = "";
    $scope.password = "";
    $scope.login = function () {
        if (userService.authenticate($scope.userName, $scope.password)) {
            $rootScope.loggedIn = true;
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
        $rootScope.loggedIn = false;
    }

    
}