/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.partners.edit', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider

            .state('partners.edit', {
            url: '/edit',
            title: 'Editar',
            templateUrl: 'app/pages/partners/edit/edit.html',
            controller: 'PartnersEditCtrl',
            params: {
                'key': false
            },
            sidebarMeta: {
                order: 0,
            },
        });
    }

})();