/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.partners', [
            'BlurAdmin.pages.partners.list',
            'BlurAdmin.pages.partners.add',
            'BlurAdmin.pages.partners.edit'
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('partners', {
                abstract: true,
                url: '/partners',
                title: 'Partners',
                template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',

                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 150,
                },
            });


    }

})();