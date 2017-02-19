/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.benefits.list', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('benefits.list', {
                url: '/list',
                templateUrl: 'app/pages/benefits/list/list.html',
                title: 'Gestionar',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();