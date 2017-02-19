/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.benefits', [
            'BlurAdmin.pages.benefits.list',
            'BlurAdmin.pages.benefits.edit',
            'BlurAdmin.pages.benefits.add'
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('benefits', {
                abstract: true,
                url: '/benefits',
                title: 'Beneficios',
                template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 50,
                },
            });


    }

})();