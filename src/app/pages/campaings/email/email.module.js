/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.campaings.email', [
         'ui.tinymce'
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider

            .state('campaings.email', {
            url: '/email',
            templateUrl: 'app/pages/campaings/email/email.html',
            title: 'Email',
            sidebarMeta: {
                order: 0,
            },
        });
    }

})();