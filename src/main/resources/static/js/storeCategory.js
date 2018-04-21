(function() {

	var app = angular.module("storeCategory", []);

	var storeCategoryCtrl = function($scope, $http) {
        $scope.storeEditName = null;
        $scope.storeEditLocation = null;
        $scope.storeEditId = null;

        $scope.initialize = function() {
            //Add your specialize code here
        }

        $scope.editStore = function(storeId) {
            $http.get("/api/category/store/" + storeId)
            .then(
                    function(response) {
                        $scope.storeEditId = response.data.id;
                        $scope.storeEditName = response.data.name;
                        $scope.storeEditLocation = response.data.location;
                    },
                    function(reason) {
                        console.log(reason.data);
                    }
            );
        }

        $scope.initialize();
	};

	app.controller("storeCategoryCtrl", ["$scope", "$http", storeCategoryCtrl]);

}());