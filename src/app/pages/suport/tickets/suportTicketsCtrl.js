/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.suport')
        .controller('SuportTicketCtrl', SuportTicketCtrl);

    /** @ngInject */
    function SuportTicketCtrl($scope, $state, $uibModal) {
        console.log('SuportTicketCtrl...');
        
        suportRef.child('tickets').on('value', function(ss){
            console.log(ss.val());
            $scope.tickets = ss.val();
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