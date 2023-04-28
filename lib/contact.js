var contact = angular.module('contact', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/contact", {
                templateUrl: "/template/contactus.html",
                controller: "contactCtrl"
            })
    })
    .controller("contactCtrl", function ($scope) {
        $scope.message = "This is contact us page"
    })