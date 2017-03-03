(function() {
    'use strict';

    angular.module('BlurAdmin.pages.products')
        .controller('ProductsEditCtrl', ProductsEditCtrl);

    /** @ngInject */
    function ProductsEditCtrl($scope, $state, toastr, $stateParams, $uibModal) {

        console.log("ProductsEditCtrl...");
        console.log($stateParams);
        if ($stateParams.key) {
            productsRef.child($stateParams.key).on('value', function(ss) {
                console.log(ss.val());
                $scope.products = ss.val();
            });
        }


    }


})();