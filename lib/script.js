var myApp = angular.module("myApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "/template/home.html",
                controller: "homeCtrl"
            })
            .when("/dashboard", {
                templateUrl: "/template/dashboard.html",
                controller: "dashboardCtrl"
            })
            .when("/admin", {
                templateUrl: "/template/admin.html",
                controller: "adminCtrl"
            })
            .when("/parent", {
                templateUrl: "/template/parent.html",
                controller: "parentCtrl"
            })
            .when("/student", {
                templateUrl: "/template/student.html",
                controller: "studentCtrl"
            })
            .when("/teacher", {
                templateUrl: "/template/teacher.html",
                controller: "teacherCtrl"
            })

            .when("/contact", {
                templateUrl: "/template/contactus.html",
                controller: "contactCtrl"
            })
            .when("/logout", {
                templateUrl: "/template/home.html",
                controller: "logoutCtrl"
            })
            .otherwise({
                redirectTo: "/home"
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

    .controller("studentCtrl", function ($scope) {
        $scope.message = "This is student page"
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
    .controller("contactCtrl", function ($scope) {
        $scope.message = "This is contact us page"
    })
    .controller("logoutCtrl", function ($scope) {
        $scope.message = "This is logout us page"
    })

function HeaderController($scope, $location) {
    $scope.isActive = function (destination) {
        return destination === $location.path();
    };
}



