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
                $scope.product = ss.val();
            });
        }


        $scope.editInfo = function(info) {
            console.log("editInfo");
            console.log($scope.product);
            if (info == 'price') {
                console.log($scope.product.details.price);
                productsRef.child($stateParams.key + '/details/price').update($scope.product.details.price);
            }
        }
    }
})();