/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.categories.list', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('categories.list', {
                url: '/list',
                templateUrl: 'app/pages/categories/list/list.html',
                title: 'Gestionar',
                controller: 'ListCtrl',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();