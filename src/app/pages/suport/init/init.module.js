/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.suport.init', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('suport.init', {
                url: '/init',
                templateUrl: 'app/pages/suport/init/init.html',
                title: 'Principal',
                controller: 'SuportCtrl',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();