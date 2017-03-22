(function() {
    'use strict';

    angular.module('BlurAdmin.pages.transactions')
        .controller('TransactionsDiscountCtrl', TransactionsDiscountCtrl);

    /** @ngInject */
    function TransactionsDiscountCtrl($scope, $state, $stateParams) {
        console.log('TransactionsDiscountCtrl....');
        transactionsRef.on('value', function(ss) {
            $scope.transactions = ss.val();
        });
    }
})();