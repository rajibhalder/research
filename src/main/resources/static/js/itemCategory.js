(function() {

	var app = angular.module("itemCategory", []);

	var itemCategoryCtrl = function($scope, $http) {
        $scope.itemEditName = null;
        $scope.itemEditDescription = null;
        $scope.itemEditId = null;

        $scope.initialize = function() {
            //Add your specialize code here
        }

        $scope.editItem = function(itemId) {
            $http.get("/api/category/item/" + itemId)
            .then(
                    function(response) {
                        $scope.itemEditId = response.data.id;
                        $scope.itemEditName = response.data.name;
                        $scope.itemEditDescription = response.data.description;
                    },
                    function(reason) {
                        console.log(reason.data);
                    }
            );
        }

        $scope.initialize();
	};

	app.controller("itemCategoryCtrl", ["$scope", "$http", itemCategoryCtrl]);

}());