
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.admin')
        .controller('AdminUsersCtrl', AdminUsersCtrl);

    /** @ngInject */
    function AdminUsersCtrl($scope, $state, $uibModal) {
        console.log('adminUsersCtrl');
        usersRef.on('value', function (ss) {
            $scope.users = ss.val();
            console.log($scope.users);

        });

        rolsRef.on('value', function (ss) {
            $scope.rols = ss.val();
            $scope.rolsArray = [];

            ss.forEach(function (ssChild) {
                var key = ssChild.key;
                var aux = { rol: ssChild.val(), key: key };
                $scope.rolsArray.push(aux);
                console.log($scope.rolsArray);
            });
        });


        $scope.open = function (page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,

            });
        }

        $scope.delete = function (key) {
            if (confirm('Esta seguro que desea borrar este usuario?')) {
                usersRef.child(key).remove();
            }
        }

        $scope.edit = function(key, item){
            $uibModal.open({
                animation: true,
                templateUrl: 'app/pages/admin/widgets/users.edit.modal.html',
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


        $scope.addUser = function (modal) {
            modal.$dismiss();
            authRef.createUserWithEmailAndPassword($scope.user.email, "password")
                .then(function (userRecord) {
                    console.log(userRecord);
                    usersRef.child(userRecord.uid).set({
                        name: $scope.user.name,
                        email: $scope.user.email,
                        rol: $scope.user.rol.rol
                    });

                    authRef.sendPasswordResetEmail($scope.user.email).then(function () {
                        console.log("mandando email a:" + $scope.user.email);
                    }, function (error) {
                        console.log(error);
                    });
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                });

        }


    }


})();