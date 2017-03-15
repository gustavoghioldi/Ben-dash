/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.communityconfig', [
            'BlurAdmin.pages.communityconfig.config'
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('communityconfig', {
                abstract: true,
                url: '/communityconfig',
                title: 'Comunidad',
                template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 2,
                },
            });


    }

})();