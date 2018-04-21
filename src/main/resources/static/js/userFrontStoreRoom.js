(function() {

	var app = angular.module("userFrontStoreRoom", []);

	var userFrontStoreRoomCtrl = function($scope, $http) {
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
        $scope.storeItemRegistryCategoryItemId = null;

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
                        console.log("storeItemRegistryCategoryId: "+storeItemRegistryCategoryId);
                        console.log("response.data: "+response.data);
                        $scope.storeItemRegistryCategoryEditId = response.data.id;
                        $scope.storeItemRegistryCategoryEditStoreName = response.data.stores.name;
                        $scope.storeItemRegistryCategoryEditItemName = response.data.items.name;
                        $scope.storeItemRegistryCategoryItemId = response.data.items.id;
                    },
                    function(reason) {
                        console.log(reason.data);
                    }
            );
        }

        $scope.initialize();
	};

	app.controller("userFrontStoreRoomCtrl", ["$scope", "$http", userFrontStoreRoomCtrl]);

}());