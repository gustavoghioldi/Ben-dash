/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.products.add', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('products.add', {
                url: '/add',
                templateUrl: 'app/pages/products/add/add.html',
                title: 'Agregar',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();