angular.module('home.controller',['services'])
      .controller('homeCtrl', ['$scope', '$rootScope', '$state', 'userService', HomeController])

function HomeController($scope, $rootScope, $state, userService) {
  
    var listUsers = userService.get();
    for (var i = 0; i < listUsers.length; i++) {
        listUsers[i].age = parseInt(listUsers[i].age);
    }
    $scope.users = listUsers;

    $scope.columns = ["name", "email", "age", "address", "education"];
    $scope.selectedSortColumn = "name";

    $scope.update = function (id) {
        $state.go('editUser', { id: id});
    }
    $scope.sort = function () {
        alert($scope.selectedSortColumn);
    }

    $scope.delete = function (id) {
        if (confirm("Are you sure you want to delete it?")) {
            userService.deleteUser(id);
        }
        $scope.users = userService.get();
    }

    $scope.create = function () {
        $state.go('editUser');
    }

    
};