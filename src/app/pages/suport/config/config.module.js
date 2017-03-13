/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.suport.config', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('suport.config', {
                url: '/config',
                templateUrl: 'app/pages/suport/config/config.html',
                title: 'Configuración',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();