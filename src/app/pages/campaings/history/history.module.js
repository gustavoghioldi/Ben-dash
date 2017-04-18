/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.campaings.history', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider

            .state('campaings.history', {
            url: '/history',
            templateUrl: 'app/pages/campaings/history/history.html',
            title: 'Historial',
            sidebarMeta: {
                order: 0,
            },
        });
    }

})();