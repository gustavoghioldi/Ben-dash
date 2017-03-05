/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.admin')
        .controller('AdminUsersCtrl', AdminUsersCtrl);

    /** @ngInject */
    function AdminUsersCtrl($scope, $state, $uibModal) {
        console.log('adminUsersCtrl');
        usersRef.on('value', function(ss) {
            $scope.users = ss.val();
            console.log($scope.users);
        });

        rolsRef.on('value', function(ss) {
            $scope.rols = ss.val();
            $scope.rolsArray = [];

            ss.forEach(function(ssChild) {
                var key = ssChild.key;
                var aux = { rol: ssChild.val(), key: key };
                $scope.rolsArray.push(aux);
                console.log($scope.rolsArray);
            });
        });


        $scope.open = function(page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,

            });
        }

        $scope.addUser = function(modal) {
            modal.$dismiss();
            usersRef.push({
                name: $scope.user.name,
                email: $scope.user.email,
                rol: $scope.user.rol.rol
            });
        }




    }


})();