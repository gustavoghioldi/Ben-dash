(function() {
    'use strict';

    angular.module('BlurAdmin.pages.products')
        .controller('ProductsCtrl', ProductsCtrl);

    /** @ngInject */
    function ProductsCtrl($scope, $state, $uibModal) {


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

        categoriesRef.on('value', function(ss) {

            $scope.categories = ss.val();
            console.log($scope.categories);

            $scope.categoriesArray = [];

            ss.forEach(function(ssChild) {
                var key = ssChild.key;
                var aux = { category: ssChild.val(), key: key };
                $scope.categoriesArray.push(aux);
                console.log($scope.categoriesArray);
            });
        });

        partnersRef.on('value', function(ss) {

            $scope.partners = ss.val();
            console.log($scope.partners);

            $scope.partnersArray = [];

            ss.forEach(function(ssChild) {
                var key = ssChild.key;
                var aux = { partner: ssChild.val(), key: key };
                $scope.partnersArray.push(aux);
                console.log($scope.partnersArray);
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

        $scope.delete = function(key) {
            console.log(key);
            productsRef.child(key).remove();
            $state.go('products.list');
        }

        $scope.addProducts = function() {
            $state.go('products.add');
        }

        $scope.createProduct = function() {
            productsRef.orderByChild("sku").equalTo($scope.product.sku).on('value', function(ss) {
                if (!ss.val()) {
                    var key = productsRef.push({
                        name: $scope.product.name,
                        sku: $scope.product.sku,
                        type: $scope.product.type,
                        category: $scope.product.category.category,
                        partner: $scope.product.partner.partner

                    }).key;
                    console.log(key);
                    $state.go('products.edit', { key: key });
                }
            });
        }

        $scope.open = function(page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,
            });
        }

    }

})();