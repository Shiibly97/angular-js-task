var myStudents = angular.module('myStudents', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/student", {
                templateUrl: "/template/student.html",
                controller: "studentCtrl"
            })
    })
    .controller("studentCtrl", function ($scope, $http, $log) {
        $scope.message = "This is student page"
        var successCallBack = function (response) {
            $scope.students = response.data;
            $log.info(response);
        }
        var errorCallBack = function (response) {
            $scope.error = response.data;
            $log.info(response);
        }
        $http({
            method: 'GET',
            url: '/Data/students.json'
        }).then(successCallBack, errorCallBack)
        $scope.deleteRow = function (index) {
            $scope.students.splice(index, 1);
        };
    })