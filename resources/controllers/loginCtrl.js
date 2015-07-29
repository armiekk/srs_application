(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope']; 

    function loginCtrl($scope) {
        $scope.title = 'loginCtrl';

        activate();

        function activate() { }
    }
})();
