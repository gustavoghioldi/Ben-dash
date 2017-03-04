/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.products.edit', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('products.edit', {
                url: '/edit',
                templateUrl: 'app/pages/products/edit/edit.html',
                title: 'Editar',
                controller: 'ProductsEditCtrl',
                params: {
                    'key': false
                },
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();