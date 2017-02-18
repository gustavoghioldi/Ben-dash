/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.communityconfig.config', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider

            .state('communityconfig.config', {
            url: '/config',
            templateUrl: 'app/pages/communityconfig/config/config.html',
            title: 'Editar',
            sidebarMeta: {
                order: 0,
            },
        });
    }

})();