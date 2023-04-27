var myApp = angular.module("myApp", ['ngRoute', 'myDash', 'myAdmin', 'myParent', 'myStudents', 'myTeachers', 'contact','blogList'])
    .config(function ($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: "/dashboard"
            })
    })
    .controller("homeCtrl", function ($scope, $http, $log) {
        $scope.message = "This is home page"
        var successCallBack = function (response) {
            $scope.student = response.data;
            $log.info("successful giving students data")
        }
        var errorCallBack = function (response) {
            $scope.error = response.data;
            $log.info("Failed giving students data")
        }
        $http({
            method: 'GET',
            url: '/Data/students.json'
        })
            .then(successCallBack, errorCallBack)
    })
    .controller("logoutCtrl", function ($scope, $location) {
        $scope.message = "This is logout us page";
        $scope.logOut = function (des) {
            return des === $location.path('/template/login page/login.html')
        }
    });

