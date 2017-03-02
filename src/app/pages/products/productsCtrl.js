(function() {
    'use strict';

    angular.module('BlurAdmin.pages.products')
        .controller('ProductsCtrl', ProductsCtrl);

    /** @ngInject */
    function ProductsCtrl($scope, $state, toastr) {
        console.log("ProductsCtrl...");

        productsRef.on('value', function(ss) {
            $scope.products = ss.val();
            console.log($scope.products);

        });

        $scope.toast = function() {
            toastr.success('Agregado con exito', 'ya puede gestionar sta categoria', {
                "autoDismiss": false,
                "positionClass": "toast-top-full-width",
                "type": "success",
                "timeOut": "5000",
                "extendedTimeOut": "2000",
                "allowHtml": false,
                "closeButton": false,
                "tapToDismiss": true,
                "progressBar": false,
                "newestOnTop": true,
                "maxOpened": 0,
                "preventDuplicates": false,
                "preventOpenDuplicates": false
            })
        }

        $scope.createProduct = function() {
            productsRef.orderByChild("sku").equalTo($scope.products.sku).on('value', function(ss) {
                if (!ss.val()) {
                    var key = productsRef.push({
                        name: $scope.products.name,
                        code: $scope.products.sku,
                        type: $scope.products.type
                    }).key;
                    console.log(key);
                }
            });
        }

    }





})();