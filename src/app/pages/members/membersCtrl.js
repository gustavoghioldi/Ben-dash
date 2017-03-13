/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.members')
        .controller('MembersCtrl', MembersCtrl);

    /** @ngInject */
    function MembersCtrl($scope, $state, toastr, $stateParams, $uibModal) {
        console.log('MembersCtrl...');

        membersRef.on('value', function(ss) {
            $scope.members = ss.val();
            console.log($scope.members);
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