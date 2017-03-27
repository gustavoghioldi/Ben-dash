/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.suport.tickets')
        .controller('SuportModalTicketCtrl', SuportModalTicketCtrl);

    /** @ngInject */
    function SuportModalTicketCtrl($scope, $state) {
        console.log('SuportModalTicketCtrl...');

        $scope.priorities = [
            'trivial',
            'minor',
            'major',
            'critical',
            'blocker'
        ];

        suportRef.child('/types').on('value', function (ss) {
                $scope.types = ss.val();
            });
        

        $scope.save = function () {
            suportRef.child('/tickets').push({
                title: $scope.title,
                author: $scope.author,
                description: $scope.description || null,
                asigned_to: $scope.asigned_to || null,
                type: $scope.type || null,
                priority: $scope.priority || null
            });
        }

    }

})();