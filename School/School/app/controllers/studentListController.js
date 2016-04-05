school.controller('studentListController', ['$scope', function ($scope) {
    var db = new database();    
    $scope.list = db.students;
    $scope.parentTitle= $scope.$parent.title;
}]);