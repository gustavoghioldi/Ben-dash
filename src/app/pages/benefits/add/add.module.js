/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.benefits.add', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('benefits.add', {
                url: '/add',
                templateUrl: 'app/pages/benefits/add/add.html',
                title: 'Agregar',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();