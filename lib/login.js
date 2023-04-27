var myLogin = angular.module('myLogin', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "/template/login page/login.html",
                controller: "logindCtrl"
            })
    })