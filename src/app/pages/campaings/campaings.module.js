/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.campaings', [

        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('campaings', {
                abstract: true,
                url: '/campaings',
                title: 'Campañas',
                template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 250,
                },
            });


    }

})();