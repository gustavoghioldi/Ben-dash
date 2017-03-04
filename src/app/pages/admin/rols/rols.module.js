/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.admin.rols', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('admin.rols', {
                url: '/rols',
                templateUrl: 'app/pages/admin/rols/rols.html',
                title: 'Roles',
                sidebarMeta: {
                    order: 2,
                },
            });
    }

})();