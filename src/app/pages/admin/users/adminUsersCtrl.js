/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.admin')
        .controller('AdminUsersCtrl', AdminUsersCtrl);

    /** @ngInject */
    function AdminUsersCtrl($scope, $state) {
        console.log('adminUsersCtrl');
        usersRef.on('value', function(ss) {
            $scope.users = ss.val();
            console.log($scope.users);
        });


    }


})();