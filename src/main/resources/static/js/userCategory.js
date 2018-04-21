(function() {

	var app = angular.module("userCategory", []);

	var userCategoryCtrl = function($scope, $http, $window) {

        $scope.firstName = null;
        $scope.lastName = null;
        $scope.phone = null;
        $scope.email = null;
        $scope.username = null;
        $scope.userId = null;

        $scope.initialize = function() {
            //Add your specialize code here
        }

        $scope.editUser = function(userId) {
            $http.get("/api/category/user/" + userId)
            .then(
                    function(response) {
                        $scope.firstName = response.data.firstName;
                        $scope.lastName = response.data.lastName;
                        $scope.phone = response.data.phone;
                        $scope.email = response.data.email;
                        $scope.username = response.data.username;
                        $scope.userId = response.data.userId;
                    },
                    function(reason) {
                        console.log(reason.data);
                    }
            );
        }

        $scope.enableUser = function(username) {
            $http.get("/api/user/"+username+"/enable")
            .then(
                    function(response) {
                        $window.alert('User '+username+' enabled successfully !');
                        $window.location.reload();
                    },
                    function(reason) {
                        console.log(reason.data);
                    }
            );
        }

        $scope.disableUser = function(username) {
            $http.get("/api/user/"+username+"/disable")
            .then(
                    function(response) {
                        $window.alert('User '+username+' disabled successfully !');
                        $window.location.reload();
                    },
                    function(reason) {
                        console.log(reason.data);
                    }
            );
        }

        $scope.initialize();
	};

	app.controller("userCategoryCtrl", ["$scope", "$http","$window", userCategoryCtrl]);

}());