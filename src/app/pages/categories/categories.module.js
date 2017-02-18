/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.categories', [
            'BlurAdmin.pages.categories.list',
            'BlurAdmin.pages.categories.add'
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('categories', {
                abstract: true,
                url: '/categories',
                title: 'Categorias',
                template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 150,
                },
            });


    }

})();