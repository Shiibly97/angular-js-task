var myDash = angular.module('myDash', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/dashboard", {
                templateUrl: "/template/dashboard.html",
                controller: "dashboardCtrl"
            })
    })
    .controller("dashboardCtrl", function ($scope, $http, $log) {
        $scope.message = "This is dashboard page"
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

    })