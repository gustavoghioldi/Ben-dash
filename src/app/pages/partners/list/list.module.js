/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.partners.list', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider

            .state('partners.list', {
            url: '/list',
            templateUrl: 'app/pages/partners/list/list.html',
            title: 'Gestionar',
            sidebarMeta: {
                order: 0,
            },
        });
    }

})();