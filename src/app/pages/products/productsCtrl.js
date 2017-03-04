(function() {
    'use strict';

    angular.module('BlurAdmin.pages.products')
        .controller('ProductsCtrl', ProductsCtrl);

    /** @ngInject */
    function ProductsCtrl($scope, $state) {
        console.log("ProductsCtrl...");

        productsRef.on('value', function(ss) {
            $scope.products = ss.val();
            console.log($scope.products);

            $scope.productsArray = [];

            ss.forEach(function(ssChild) {
                var key = ssChild.key;
                var aux = { name: ssChild.val().name, key: key };
                $scope.productsArray.push(aux);
                console.log($scope.productsArray);
            });
        });

        $scope.productSelected = function() {
            console.log($scope.products.selected);
            console.log($scope.products.selected.key);

            $scope.edit($scope.products.selected.key);
        }

        $scope.edit = function(key) {
            console.log('ProductsCtrl.edit ...');
            console.log(key);
            $state.go('products.edit', { key: key });
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
                    $state.go('products.edit', { key: key });
                }
            });
        }

    }





})();