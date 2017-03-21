/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.suport')
        .controller('SuportCtrl', SuportCtrl);

    /** @ngInject */
    function SuportCtrl($scope, $state, $uibModal) {
        console.log('SuportCtrl...');

        $scope.open = function(page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,

            });
        }
    }

})();