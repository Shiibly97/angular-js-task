angular.module('headerList', [])
    .component('headerList', {
        templateUrl: '/components /html/header.html',
        controller: 'headerCtrl'
    })
    .controller('headerCtrl', function () {
        console.log("Hello from header component")
    })