/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.categories.add', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider

            .state('categories.add', {
            url: '/add',
            templateUrl: 'app/pages/categories/add/add.html',
            controller: 'AddCtrl',
            title: 'Agregar',
            sidebarMeta: {
                order: 0,
            },
        });
    }

})();