(function() {
    'use strict';

    angular.module('BlurAdmin.pages.products')
        .controller('ProductsEditCtrl', ProductsEditCtrl);

    /** @ngInject */
    function ProductsEditCtrl($scope, $state, toastr, $stateParams, fileReader, $uibModal) {

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
            if (info == 'basics') {
                console.log($scope.product.details);
                productsRef.child($stateParams.key + '/details/basics').update($scope.product.details.basics);
            }
            if (info == 'price') {
                console.log($scope.product.details.price);
                productsRef.child($stateParams.key + '/details/price').update($scope.product.details.price);
            }

            if (info == 'inventory') {
                console.log($scope.product.details.inventory);
                productsRef.child($stateParams.key + '/details/inventory').update($scope.product.details.inventory);
            }
        }

        $scope.uploadPicture = function() {
            var fileInput = document.getElementById('uploadFile');
            fileInput.click();
        };

        $scope.getFile = function() {
            console.log('getFile');
            var file = $('#uploadFile').get(0).files[0];
            var storage = firebase.storage().ref('images/products')

            var uploadTask = storage.child(file.name).put(file);

            uploadTask.on('state_changed', function(snapshot) {
                console.log("subiendo");
            }, function(error) {
                console.log(error);
            }, function() {
                console.log(uploadTask.snapshot.downloadURL);
                productsRef.child($stateParams.key + '/details/pictures').update({
                    picture: uploadTask.snapshot.downloadURL
                });
                fileReader.readAsDataUrl(file, $scope)
                    .then(function(result) {
                        $scope.product.details.pictures.picture = result;
                    });
            });

        };
    }
})();