(function() {
    'use strict';

    angular.module('BlurAdmin.pages.transactions')
        .controller('TransactionsSalesCtrl', TransactionsSalesCtrl);

    /** @ngInject */
    function TransactionsSalesCtrl($scope, $state, $stateParams,  $uibModal) {
        console.log('TransactionsSalesCtrl....');
        transactionsRef.on('value', function(ss) {
            $scope.transactions = ss.val();
            console.log($scope.transactions);
        });

        $scope.getMemeber = function(memberID){
            membersRef.child("-KiA606z5X3VbTcqZFyE").on('value', function(ss){
                var templateModal = '<p> email: '+ss.val().email+'</p><br />';
                templateModal += '<p> Nombre: '+ss.val().firstname+'</p><br />';
                templateModal += '<p> Apellido: '+ss.val().lastname+'</p><br />';
                templateModal += '<p> DNI: '+ss.val().dni+'</p><br />';
                templateModal += '<p> Provincia: '+ss.val().state+'</p><br />';
                templateModal += '<p> Ciudad: '+ss.val().city+'</p><br />';
                $uibModal.open({
                    animation: true,
                    template: templateModal,
                    size: 'md'
                });
            });
        }
    }
})();