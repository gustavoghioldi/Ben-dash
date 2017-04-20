/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.campaings.push', [
         'ui.tinymce'
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider

            .state('campaings.push', {
            url: '/push',
            templateUrl: 'app/pages/campaings/push/push.html',
            title: 'Push Notifications',
            sidebarMeta: {
                order: 0,
            },
        });
    }

})();