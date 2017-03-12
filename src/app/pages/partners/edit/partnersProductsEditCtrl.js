(function() {
    'use strict';

    angular.module('BlurAdmin.pages.partners')
        .controller('PartnersProductsEditCtrl', PartnersProductsEditCtrl);

    /** @ngInject */
    function PartnersProductsEditCtrl($scope, $state, $stateParams, $uibModal) {
        console.log("PartnersProductsEditCtrl");

        productsRef.orderByChild('partner/code').equalTo($scope.partner.code).on('value', function(ss) {

            $scope.products = ss.val();
            console.log($scope.products);

        });
    }
})();