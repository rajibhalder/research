(function() {

	var app = angular.module("userFrontStore", []);

	var userFrontStoreCtrl = function($scope, $http) {
        $scope.itemEditName = null;
        $scope.itemEditDescription = null;
        $scope.itemEditId = null;

        $scope.firstName = null;
        $scope.lastName = null;
        $scope.storeName = null;
        $scope.storeId = null;

        $scope.storeItemRegistryCategoryEditStoreName = null;
        $scope.storeItemRegistryCategoryEditItemName = null;
        $scope.storeItemRegistryCategoryEditId = null;

        $scope.initialize = function() {
            //Add your specialize code here

            //Get user details
            $http.get("/api/category/user/" + $scope.userId)
            .then(
                    function(response) {
                        $scope.firstName = response.data.firstName;
                        $scope.lastName = response.data.lastName;
                        $scope.storeName = response.data.stores.name;
                        $scope.storeId = response.data.stores.id;
                    },
                    function(reason) {
                        console.log(reason.data);
                    }
            );

        }

        $scope.editStoreItemRegistry = function(storeItemRegistryCategoryId) {
            $http.get("/api/category/storeItemRegistryCategory/" + storeItemRegistryCategoryId)
            .then(
                    function(response) {
                        $scope.storeItemRegistryCategoryEditId = response.data.id;
                        $scope.storeItemRegistryCategoryEditStoreName = response.data.stores.name;
                        $scope.storeItemRegistryCategoryEditItemName = response.data.items.name;
                    },
                    function(reason) {
                        console.log(reason.data);
                    }
            );
        }

        $scope.initialize();
	};

	app.controller("userFrontStoreCtrl", ["$scope", "$http", userFrontStoreCtrl]);

}());