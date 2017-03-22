(function() {
    'use strict';

    angular.module('BlurAdmin.pages.transactions.edit')
        .controller('TransactionsEditCtrl', TransactionsEditCtrl);

    /** @ngInject */
    function TransactionsEditCtrl($scope, $state, $stateParams) {
        console.log('TransactionsEditCtrl....');
        console.log($stateParams);
        $scope.saleKey = $stateParams.key;
        if ($stateParams.key) {
            transactionsRef.child($stateParams.key).on('value', function(ss) {
                console.log(ss.val());
                $scope.transaction = ss.val();
            });
        }

        $scope.toUsed = function() {
            if (confirm("esta seguro que desea cambiar el estado de esta transacción?")) {
                transactionsRef.child($stateParams.key + '/used').set(true);
            }
        }
    }
})();