/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.members')
        .controller('MembersAddCtrl', MembersAddCtrl);

    /** @ngInject */
    function MembersAddCtrl($scope) {
        console.log('MembersAddCtrl...');



        $scope.addMember = function(modal) {
            console.log($scope);
            modal.$dismiss();
            membersRef.push({
                firstname: $scope.firstname,
                lastname: $scope.lastname,
                dni: $scope.dni,
                email: $scope.email,
                state: $scope.state,
                city: $scope.city
            });
        }

    }

})();