var myDash = angular.module('myDash', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/dashboard", {
                templateUrl: "/docs/dashboard.html",
                controller: "dashboardCtrl"
            })
    })
    .controller("dashboardCtrl", function ($scope, $http, $log) {
        $scope.message = "This is dashboard page"
        var successCallBack = function (response) {
            $scope.admins = response.data;
            $log.info('Hello from dashboard page')
        };
        var errorCallBack = function (response) {
            $scope.error = response.data;
            $log.info('Error cant get dashboard page')
        }
        $http({
            method: 'GET',
            url: '/Data/admin.json'
        })
            .then(successCallBack, errorCallBack)

    })