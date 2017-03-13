/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.suport.tickets', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('suport.tickets', {
                url: '/tickets',
                templateUrl: 'app/pages/suport/tickets/tickets.html',
                title: 'Tickets',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();