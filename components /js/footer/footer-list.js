angular.module('footerList', [])
    .component('footerList', {
        templateUrl: '/components /html/footer.html',
        controller: 'footerCtrl'
    })
    .controller('footerCtrl', function () {
        console.log("Hello from footer component")
    })