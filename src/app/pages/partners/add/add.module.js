/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.partners.add', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider

            .state('partners.add', {
            url: '/add',
            templateUrl: 'app/pages/partners/add/add.html',
            title: 'Agregar',
            sidebarMeta: {
                order: 0,
            },
        });
    }

})();