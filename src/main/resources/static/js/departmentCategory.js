(function() {

	var app = angular.module("departmentCategory", []);

	var departmentCategoryCtrl = function($scope, $http) {
        $scope.departmentEditName = null;
        $scope.departmentEditLocation = null;
        $scope.departmentEditId = null;

        $scope.initialize = function() {
            //Add your specialize code here
        }

        $scope.editDepartment = function(departmentId) {
            $http.get("/api/category/department/" + departmentId)
            .then(
                    function(response) {
                        $scope.departmentEditId = response.data.id;
                        $scope.departmentEditName = response.data.name;
                        $scope.departmentEditLocation = response.data.location;
                    },
                    function(reason) {
                        console.log(reason.data);
                    }
            );
        }

        $scope.initialize();
	};

	app.controller("departmentCategoryCtrl", ["$scope", "$http", departmentCategoryCtrl]);

}());