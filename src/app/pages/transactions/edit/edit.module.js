/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.transactions.edit', [

        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('transactions.edit', {
                url: '/edit',
                templateUrl: 'app/pages/transactions/edit/edit.html',
                title: 'Buscar', 
                controller: 'TransactionsEditCtrl',
                params: {
                    'key': false
                },
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();