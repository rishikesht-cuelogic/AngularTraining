angular.module('home.controller',['services'])
      .controller('homeCtrl', ['$scope', '$rootScope', 'userService', HomeController])

function HomeController($scope, $rootScope, userService) {
	$scope.currentUser = userService.getCurrentUser();
};