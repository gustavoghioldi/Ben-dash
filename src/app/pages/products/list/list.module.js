/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.products.list', [

        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('products.list', {
                url: '/list',
                templateUrl: 'app/pages/products/list/list.html',
                title: 'Gestionar',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();