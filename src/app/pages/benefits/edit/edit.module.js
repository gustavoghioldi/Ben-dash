/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.benefits.edit', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('benefits.edit', {
                url: '/edit',
                templateUrl: 'app/pages/benefits/edit/edit.html',
                title: 'Editar',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();