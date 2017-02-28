/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.communityconfig')
        .controller('ConfigCtrl', ConfigCtrl);

    /** @ngInject */
    function ConfigCtrl($scope, $state) {
        console.log("ConfigCtrl...");

        configRef.on('value', function(ss) {
            $scope.conf = ss.val();
            console.log($scope.conf);
        });

        categoriesRef.on('value', function(ss) {
            $scope.categories = ss.val();
            console.log($scope.categories);
        });

        $scope.changeOrderCategories = function() {
            categoriesRef.set($scope.categories);
        }

        $scope.onClickEdit = function() {

            var file = $('#file').get(0).files[0];
            if (file) {
                var database = firebase.database().ref('/data');
                var storage = firebase.storage().ref('images')
                    //agregamos la imagen al storage
                var uploadTask = storage.child(file.name).put(file);

                uploadTask.on('state_changed', function(snapshot) {
                    // Observe state change events such as progress, pause, and resume
                    // See below for more detail
                }, function(error) {
                    console.log(error);
                }, function() {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    console.log(uploadTask.snapshot);
                    configRef.set({
                        name: $scope.conf.name,
                        description: $scope.conf.description,
                        price: $scope.conf.price,
                        image: uploadTask.snapshot.downloadURL
                    });
                });
            }
            configRef.update($scope.conf);
        }

        $scope.edit = function(kinda) {
            console.log(kinda);
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