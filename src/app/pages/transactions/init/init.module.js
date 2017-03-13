/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.transactions.init', [

        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('transactions.init', {
                url: '/init',
                templateUrl: 'app/pages/transactions/init/init.html',
                title: 'Principal',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();