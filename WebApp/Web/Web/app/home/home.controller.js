angular.module('home.controller', ['services'])
      .controller('homeCtrl', ['$scope', '$rootScope', '$state', 'userService', HomeController])

function HomeController($scope, $rootScope, $state, userService) {
    var listSelectedUsers = [];
    function getIndexOfSelectedUser(id) {
        for (var i = 0; i < listSelectedUsers.length; i++) {
            if (listSelectedUsers[i] == id)
                return i;
        }
        return -1;
    }
    function isAlreadySelected(id) {
        return getIndexOfSelectedUser(id) != -1;
    }
    function removeSelectedUser(id) {
        var index=getIndexOfSelectedUser(id);
        if (index != -1)
            listSelectedUsers.splice(index, 1);
    }
    function addSelectedUser(id) {
        listSelectedUsers.push(id);
    }
    function addOrRemoveSelectedUser(id) {
        if (isAlreadySelected(id))
            removeSelectedUser(id);
        else
            addSelectedUser(id);
    }

    var listUsers = userService.get();
    for (var i = 0; i < listUsers.length; i++) {
        listUsers[i].age = parseInt(listUsers[i].age);
    }
    $scope.users = listUsers;

    $scope.columns = ["name", "email", "age", "address", "education"];
    $scope.selectedSortColumn = "name";

    $scope.update = function (id) {
        $state.go('editUser', { id: id });
    }
    $scope.sort = function () {
        alert($scope.selectedSortColumn);
    }

    $scope.delete = function (id) {
        userService.deleteUser(id);
        $scope.$apply(function () {
            $scope.users = userService.get();
        });        
    }

    $scope.create = function () {
        $state.go('editUser');
    }

    $scope.toggleSelectedRow = function (id) {
        addOrRemoveSelectedUser(id);
    }

    $scope.getClass = function (id) {
        return (isAlreadySelected(id))
    }
};