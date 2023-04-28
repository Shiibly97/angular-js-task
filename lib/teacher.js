var theTeachers = angular.module('myTeachers', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/teacher", {
                templateUrl: "/docs/teacher.html",
                controller: "teacherCtrl"
            })
    })
    .controller("teacherCtrl", function ($scope, $http, $log) {
        $scope.message = "This is teacher page"
        var successCallBack = function (response) {
            $scope.teachers = response.data;
            $log.info(response)
        };
        var errorCallBack = function (response) {
            $scope.error = response.data;
            $log.info(response)
        }
        $http({
            method: 'GET',
            url: '/Data/teacher.json'
        })
            .then(successCallBack, errorCallBack)
        
    })