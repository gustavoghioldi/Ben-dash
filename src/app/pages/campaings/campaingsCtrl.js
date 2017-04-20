(function () {
    'use strict';

    angular.module('BlurAdmin.pages.campaings.email')
        .controller('CampaingCtrl', CampaingCtrl);

    /** @ngInject */
    function CampaingCtrl($scope, $state, $uibModal, $http) {

        $scope.geolocalizar = function () {


            $uibModal.open({
                animation: true,
                templateUrl: 'app/pages/campaings/widgets/geolocalization.html',
                size: 'lg',
                controller: function () {
                    $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=villa constitucion, salta 153, santa fe")
                        .then(function (response) {
                            console.log(response.data.results[0]);

                            var mapCanvas = document.getElementById('google-maps');
                            var myCenter = new google.maps.LatLng(response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lng);
                            var mapOptions = { center: myCenter, zoom: 10 };
                            var map = new google.maps.Map(mapCanvas, mapOptions);
                            var marker = new google.maps.Marker({
                                position: myCenter,
                                animation: google.maps.Animation.BOUNCE
                            });
                            var cityCircle = new google.maps.Circle({
                                strokeColor: '#FF0000',
                                strokeOpacity: 0.8,
                                strokeWeight: 2,
                                fillColor: '#FF0000',
                                fillOpacity: 0.35,
                                map: map,
                                center: myCenter,
                                radius: 10000
                            });
                            marker.setMap(map);
                        });
                }
            });

        }

    }


})();