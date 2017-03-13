/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.admin', [
            'BlurAdmin.pages.admin.rols',
            'BlurAdmin.pages.admin.users'
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('admin', {
                abstract: true,
                url: '/admin',
                title: 'Administración',
                template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 1,
                },
            });


    }

})();