(function() {

	var app = angular.module("userFront", []);

	var userFrontCtrl = function($scope, $http) {
        $scope.welcomeMessage = null;

        $scope.initialize = function() {
            $scope.welcomeMessage='Dear, Welcome to Admin Panel';
        }

        $scope.initialize();
	};

	app.controller("userFrontCtrl", ["$scope", "$http", userFrontCtrl]);

}());