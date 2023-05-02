var contact = angular.module('contact', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/contact", {
                templateUrl: "/docs/contactus.html",
                controller: "contactCtrl"
            })
    })
    .controller("contactCtrl", function () {

        console.log ("This is contact us page")
    })