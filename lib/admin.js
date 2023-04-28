var myAdmin = angular.module('myAdmin', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/admin", {
                templateUrl: "../docs/admin.html",
                controller: "adminCtrl"
            })
    })
    .controller("adminCtrl", function ($scope, $http, $log) {
        $scope.message = "This is admin page"
        var successCallBack = function (response) {
            $scope.admins = response.data;
            $log.info(response)
        };
        var errorCallBack = function (response) {
            $scope.error = response.data;
            $log.info(response)
        }
        $http({
            method: 'GET',
            url: '/Data/admin.json'
        })
            .then(successCallBack, errorCallBack)
        $scope.deleteRow = function (index) {
            $scope.admins.splice(index, 1);
        };
    })