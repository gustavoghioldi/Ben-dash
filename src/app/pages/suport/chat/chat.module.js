/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.suport.chat', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('suport.chat', {
                url: '/chat',
                templateUrl: 'app/pages/suport/chat/chat.html',
                title: 'Chat',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();