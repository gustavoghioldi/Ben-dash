/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.admin.users', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('admin.users', {
                url: '/users',
                templateUrl: 'app/pages/admin/users/users.html',
                title: 'Usuarios',
                sidebarMeta: {
                    order: 3,
                },
            });
    }

})();