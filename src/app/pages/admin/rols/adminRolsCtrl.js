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

        $scope.delete = function(key) {
            if (confirm("Esta seguro que desea borrar este Rol?")) {
                rolsRef.child(key).remove();
            }
        }

        $scope.addRol = function(modal) {
            modal.$dismiss();
            rolsRef.push({
                name: $scope.rol.name,
                read: $scope.rol.read || null,
                write: $scope.rol.write || null
            });
        }
    }


})();