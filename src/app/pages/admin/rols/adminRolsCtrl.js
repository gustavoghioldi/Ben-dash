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

        $scope.view = function(item) {

            $uibModal.open({
                animation: true,
                templateUrl: 'app/pages/admin/widgets/rols.view.modal.html',
                size: 'lg',
                controller: function($scope) {
                    $scope.rol = item;
                }
            });
        }

        $scope.edit = function(key, item) {

            $uibModal.open({
                animation: true,
                templateUrl: 'app/pages/admin/widgets/rols.edit.modal.html',
                size: 'lg',
                controller: function($scope) {
                    $scope.rol = item;
                    $scope.key = key;
                    $scope.edit = function(modal) {
                        modal.$dismiss;
                        rolsRef.child($scope.key).set({
                            name: $scope.rol.name,
                            read: $scope.rol.read || null,
                            write: $scope.rol.write || null
                        });
                    }
                }
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