/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.members.profilemember', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('members.profilemember', {
                abstract: true, 
                url: '/profilemember',
                templateUrl: 'app/pages/members/profilemember/profilemember.html',
                title: 'Profile Member'
            });
    }

})();