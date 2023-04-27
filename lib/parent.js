var myParent = angular.module('myParent', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/parent", {
                templateUrl: "/template/parent.html",
                controller: "parentCtrl"
            })

    })
    .controller("parentCtrl", function ($scope, $http, $log) {
        $scope.message = "This is parent page"
        var successCallBack = function (response) {
            $scope.parents = response.data;
            $log.info(response)
        };
        var errorCallBack = function (response) {
            $scope.error = response.data;
            $log.info(response)
        }
        $http({
            method: 'GET',
            url: '/Data/parents.json'
        })
            .then(successCallBack, errorCallBack)
        $scope.deleteRow = function (index) {
            $scope.parents.splice(index, 1);
        };
    })
