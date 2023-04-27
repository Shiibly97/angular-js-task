angular.module('blogList', [])
    .component('blogList', {
        templateUrl: '/components /html/posts-list.html',
        controller: function ($http, $scope, $log) {

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
            $scope.deleteRow = function (index) {
                $scope.teachers.splice(index, 1);
            };
        }

    });