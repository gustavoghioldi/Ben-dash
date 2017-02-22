/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.products', [
            'BlurAdmin.pages.products.list',
            'BlurAdmin.pages.products.edit',
            'BlurAdmin.pages.products.add'
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('products', {
                abstract: true,
                url: '/products',
                title: 'Productos',
                template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 50,
                },
            });


    }

})();