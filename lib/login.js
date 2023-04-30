var myLogin = angular.module('myLogin', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "/docs/login page/login.html",
                controller: "logindCtrl"
            })
    })