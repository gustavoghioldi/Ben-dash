/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.members.init', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('members.init', {
                url: '/init',
                templateUrl: 'app/pages/members/init/init.html',
                title: 'Principal',
                controller: 'MembersCtrl',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();