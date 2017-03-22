(function() {
    'use strict';

    angular.module('BlurAdmin.pages.transactions')
        .controller('TransactionsSalesCtrl', TransactionsSalesCtrl);

    /** @ngInject */
    function TransactionsSalesCtrl($scope, $state, $stateParams) {
        console.log('TransactionsSalesCtrl....');
        transactionsRef.on('value', function(ss) {
            $scope.transactions = ss.val();
            console.log($scope.transactions);
        });
    }
})();