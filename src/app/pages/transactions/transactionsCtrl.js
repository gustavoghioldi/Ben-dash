(function() {
    'use strict';

    angular.module('BlurAdmin.pages.transactions')
        .controller('TransactionsCtrl', TransactionsCtrl);

    /** @ngInject */
    function TransactionsCtrl($scope, $state, toastr, $stateParams) {
        console.log('transactionsCtrl....');
        transactionsRef.on('value',  function(ss) {
            console.log(ss.val());
            $scope.transactions = ss.val();

             $scope.transactionsArray = [];
             
             ss.forEach(function(ssChild) {
                var key = ssChild.key;
                var aux = { key: key };
                $scope.transactionsArray.push(aux);
                console.log($scope.transactionsArray);
            });
        });

          $scope.transactionSelected = function() {
            console.log($scope.transactions.selected);
            console.log($scope.transactions.selected.key);

            $scope.edit($scope.transactions.selected.key);
        }


        $scope.edit = function(key) {
            console.log('TransactionsCtrl.edit ...');
            console.log(key);
            $state.go('transactions.edit', { key: key });
        }
    }
})();