(function() {

	var app = angular.module("indexApp", []);
	var indexAppCtrl = function($scope, $http) {
        $scope.name = 'Rajib Halder';
        $scope.initialize = function() {
            $scope.name = 'Rajib Halder';
        }

        $scope.initialize();
	};

	app.controller("indexAppCtrl", ["$scope", "$http", indexAppCtrl]);

}());