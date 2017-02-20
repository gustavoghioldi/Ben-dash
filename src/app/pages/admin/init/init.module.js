/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.admin.init', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('admin.init', {
                url: '/init',
                templateUrl: 'app/pages/admin/init/init.html',
                title: 'Principal',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();