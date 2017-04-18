/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';
    
    angular.module('BlurAdmin.pages', [
            'ui.router',
            'ui.tinymce',
            'BlurAdmin.pages.categories',
            'BlurAdmin.pages.dashboard',
            //'BlurAdmin.pages.components',
            'BlurAdmin.pages.form',
            //'BlurAdmin.pages.tables',
            //'BlurAdmin.pages.charts',
            //'BlurAdmin.pages.maps',
            'BlurAdmin.pages.profile',
            'BlurAdmin.pages.communityconfig',
            'BlurAdmin.pages.partners',
            'BlurAdmin.pages.products',
            'BlurAdmin.pages.suport',
            'BlurAdmin.pages.admin',
            'BlurAdmin.pages.members',
            'BlurAdmin.pages.transactions',
            'BlurAdmin.pages.campaings',
         


        ])
       
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');

    }

})();