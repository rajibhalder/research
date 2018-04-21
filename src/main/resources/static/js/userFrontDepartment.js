(function() {

	var app = angular.module("userFrontDepartment", []);

	var userFrontDepartmentCtrl = function($scope, $http) {

        $scope.initialize = function() {
            //Add your specialize code here
        }

        $scope.initialize();
	};

	app.controller("userFrontDepartmentCtrl", ["$scope", "$http", userFrontDepartmentCtrl]);

}());