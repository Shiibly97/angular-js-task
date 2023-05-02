angular.module('blogList', [])
    .component('blogList', {
        templateUrl: '/components /html/posts-list.html',
        controller: 'blogListCtrl'
    })
    .controller('blogListCtrl', function ($http, $scope, $log) {
        var successCallBack = function (response) {
            $scope.teachers = response.data;
            $log.info('Hello from teacher table component')

        };
        var errorCallBack = function (response) {
            $scope.error = response.data;
            $log.info('Error cant get teacher table from component')
        }
        $http({
            method: 'GET',
            url: '../Data/teacher.json'
        })
            .then(successCallBack, errorCallBack)
        $scope.deleteRow = function (index) {
            $scope.teachers.splice(index, 1);
        };
    });
