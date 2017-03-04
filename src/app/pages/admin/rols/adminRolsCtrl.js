/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.admin')
        .controller('AdminRolsCtrl', AdminRolsCtrl);

    /** @ngInject */
    function AdminRolsCtrl($scope, $state, $uibModal) {
        console.log('AdminRolsCtrl');

        rolsRef.on('value', function(ss) {
            $scope.rols = ss.val();
            console.log($scope.rols);
        });

        $scope.open = function(page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,

            });
        }
    }


})();