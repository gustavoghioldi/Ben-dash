/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.communityconfig')
        .controller('ConfigCtrl', ConfigCtrl);

    /** @ngInject */
    function ConfigCtrl($scope, $state, fileReader) {
        console.log("ConfigCtrl...");

        configRef.on('value', function(ss) {
            $scope.conf = ss.val();
            console.log($scope.conf);
        });

        categoriesRef.on('value', function(ss) {
            $scope.categories = ss.val();
            console.log($scope.categories);
        });
        productsRef.on('value', function(ss) {
            $scope.products = ss.val();
            console.log($scope.products);
        });
        partnersRef.on('value', function(ss) {
            $scope.partners = ss.val();
            console.log($scope.partners);
        });

        $scope.changeOrderCategories = function() {
            categoriesRef.set($scope.categories);
        }

        


        $scope.uploadPicture = function() {
            var fileInput = document.getElementById('uploadFile');
            fileInput.click();
        };

        $scope.getFile = function() {
            console.log('getFile');
            var file = $('#uploadFile').get(0).files[0];
            var storage = firebase.storage().ref('images/communities')

            var uploadTask = storage.child(file.name).put(file);

            uploadTask.on('state_changed', function(snapshot) {
                console.log("subiendo");
            }, function(error) {
                console.log(error);
            }, function() {
                console.log(uploadTask.snapshot.downloadURL);
                configRef.update({
                    picture: uploadTask.snapshot.downloadURL
                });
                fileReader.readAsDataUrl(file, $scope)
                    .then(function(result) {
                        $scope.picture = result;
                    });
            });

        };

        $scope.edit = function(kinda) {
            console.log(kinda);
            console.log($scope);
            if (kinda == 'form') {
                configRef.update({
                    "name": $scope.conf.name,
                    "description": $scope.conf.description,
                    "price": $scope.conf.price,
                    "email": $scope.conf.email
                });
            }
            if (kinda == 'landing') {
                configRef.child('landing').update($scope.conf.landing);
            }

            if (kinda == 'seo') {
                configRef.child('seo').update($scope.conf.seo);
            }

            if (kinda == 'social') {
                configRef.child('social').update($scope.conf.social);
            }

            if (kinda == 'hero') {
                configRef.child('hero').update($scope.conf.hero);
            }

            if (kinda == 'webPriority') {
                configRef.child('webPriority').update($scope.conf.webPriority);
            }

            if (kinda == 'legals') {
                configRef.child('legals').update($scope.conf.legals);
            }

            if (kinda == 'texts') {
                configRef.child('texts').update($scope.conf.texts);
            }

            if (kinda == 'footer') {
                configRef.child('footer').update($scope.conf.footer);
            }

            if (kinda == 'webHooks') {
                configRef.child('webHooks').update($scope.conf.webHooks);
            }
        }

    }

})();