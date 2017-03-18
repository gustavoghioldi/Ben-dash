(function() {
    'use strict';

    angular.module('BlurAdmin.pages.partners')
        .controller('PartnersEditCtrl', PartnersEditCtrl);

    /** @ngInject */
    function PartnersEditCtrl($scope, $state, toastr, fileReader, $filter, $stateParams, $uibModal, $http, $timeout) {

        console.log("PartnersEditCtrl...");

        function initialize() {
            var mapCanvas = document.getElementById('google-maps');
            var myCenter = new google.maps.LatLng(-34.6036844, -58.3815591);
            var mapOptions = { center: myCenter, zoom: 17 };
            var map = new google.maps.Map(mapCanvas, mapOptions);
            var marker = new google.maps.Marker({
                position: myCenter,
                animation: google.maps.Animation.BOUNCE
            });
            marker.setMap(map);
        }

        $timeout(function() {
            initialize();
        }, 100);



        console.log($stateParams);
        if ($stateParams.key) {
            partnersRef.child($stateParams.key).on('value', function(ss) {
                console.log(ss.val());
                $scope.partner = ss.val();
            });
        }

        $scope.uploadPicture = function() {
            var fileInput = document.getElementById('uploadFile');
            fileInput.click();
        };

        $scope.getFile = function() {
            console.log('getFile');
            var file = $('#uploadFile').get(0).files[0];
            var storage = firebase.storage().ref('images/partners')

            var uploadTask = storage.child(file.name).put(file);

            uploadTask.on('state_changed', function(snapshot) {
                console.log("subiendo");
            }, function(error) {
                console.log(error);
            }, function() {
                console.log(uploadTask.snapshot.downloadURL);
                partnersRef.child($stateParams.key).update({
                    picture: uploadTask.snapshot.downloadURL
                });
                fileReader.readAsDataUrl(file, $scope)
                    .then(function(result) {
                        $scope.partner.picture = result;
                    });
            });

        };

        $scope.editDetails = function() {
            console.log("editDetails");
        }

        $scope.editInfo = function(info) {
            console.log("editInfo");
            console.log($scope.partner);
            if (info == 'basic') {
                console.log($scope.partner);
                partnersRef.child($stateParams.key).update($scope.partner);
            }
            if (info == 'contacts') {
                console.log($scope.partner.details.contacts);
                partnersRef.child($stateParams.key + '/details/contacts').update($scope.partner.details.contacts);
            }

            if (info == 'basics') {
                console.log($scope.partner.details.basics);
                partnersRef.child($stateParams.key + '/details/basics').update($scope.partner.details.basics);

            }
        }

        $scope.deleteBranch = function(key) {
            if (confirm('Esta seguro que desea borrar esta sucursal?')) {
                console.log("delete Branch");
                partnersRef.child($stateParams.key + "/details/branchs/" + key).remove();
            }
        }

        $scope.addBranch = function(modal) {
            console.log("addBranch");
            console.log(modal.$dismiss());
            partnersRef.child($stateParams.key + "/details/branchs").push({
                name: $scope.partners.details.branchs.name,
                addressNumber: $scope.partners.details.branchs.addressNumber || null,
                street: $scope.partners.details.branchs.street || null,
                neighborhood: $scope.partners.details.branchs.neighborhood || null,
                city: $scope.partners.details.branchs.city || null,
                state: $scope.partners.details.branchs.state || null,
                country: $scope.partners.details.branchs.country || null,
                latitude: $scope.partners.details.branchs.latitude || null,
                longitude: $scope.partners.details.branchs.longitude || null,
                monday: $scope.partners.details.branchs.monday || null,
                thursday: $scope.partners.details.branchs.thursday || null,
                wednesday: $scope.partners.details.branchs.wednesday || null,
                tuesday: $scope.partners.details.branchs.tuesday || null,
                friday: $scope.partners.details.branchs.friday || null,
                sunday: $scope.partners.details.branchs.sunday || null,
                saturday: $scope.partners.details.branchs.saturday || null
            });
        }

        $scope.geolocalizar = function() {
            console.log("https://maps.googleapis.com/maps/api/geocode/json?address=" + $scope.partners.details.branchs.address);
            $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + $scope.partners.details.branchs.address)
                .then(function(response) {
                    console.log(response.data.results[0]);

                    $scope.partners.details.branchs.latitude = response.data.results[0].geometry.location.lat;
                    $scope.partners.details.branchs.longitude = response.data.results[0].geometry.location.lng;
                    $scope.partners.details.branchs.addressNumber = response.data.results[0].address_components[0].long_name;
                    $scope.partners.details.branchs.street = response.data.results[0].address_components[1].long_name;
                    $scope.partners.details.branchs.neighborhood = response.data.results[0].address_components[2].long_name;
                    $scope.partners.details.branchs.city = response.data.results[0].address_components[3].long_name;
                    $scope.partners.details.branchs.state = response.data.results[0].address_components[4].long_name;
                    $scope.partners.details.branchs.country = response.data.results[0].address_components[5].long_name;

                    var mapCanvas = document.getElementById('google-maps');
                    var myCenter = new google.maps.LatLng(response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lng);
                    var mapOptions = { center: myCenter, zoom: 17 };
                    var map = new google.maps.Map(mapCanvas, mapOptions);
                    var marker = new google.maps.Marker({
                        position: myCenter,
                        animation: google.maps.Animation.BOUNCE
                    });
                    marker.setMap(map);
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