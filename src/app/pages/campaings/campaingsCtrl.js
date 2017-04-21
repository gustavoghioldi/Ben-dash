(function () {
    'use strict';

    angular.module('BlurAdmin.pages.campaings.email')
        .controller('CampaingCtrl', CampaingCtrl);

    /** @ngInject */
    function CampaingCtrl($scope, $state, $uibModal, $http) {
        console.log('CampaingCtrl....');

        rootRef.child('campaings').on('value', function(ss){
            $scope.campaings = ss.val();
        });

        var template = '<p style="text-align: center;">TUMB</p>';
        template += '<table style="margin-left: auto; margin-right: auto;">';
        template += '<tbody>';
        template += '<tr>';
        template += '<td>&nbsp;<img src="http://placehold.it/100x100" alt="" width="100" height="100" /></td>';
        template += '<td><img src="http://placehold.it/100x100" alt="" width="100" height="100" />&nbsp;</td>';
        template += '<td><img src="http://placehold.it/100x100" alt="" width="100" height="100" />&nbsp;</td>';
        template += '</tr>';
        template += '<tr>';
        template += '<td>&nbsp;<img src="http://placehold.it/100x100" alt="" width="100" height="100" /></td>';
        template += '<td><img src="http://placehold.it/100x100" alt="" width="100" height="100" />&nbsp;</td>';
        template += '<td><img src="http://placehold.it/100x100" alt="" width="100" height="100" />&nbsp;</td>';
        template += '</tr>';
        template += '</tbody>';
        template += '</table>';

        tinymce.init({
            selector: 'textarea',
            plugins: ["advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"],

            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
            templates: [
                { title: 'Tabla de imagenes', description: 'tabla de imagenes', content: template }
            ]
        });

        $scope.saveCampain = function () {
            rootRef.child('campaings').push({
                type: 'email',
                name : $scope.name,
                sex : $scope.sex || "all",
                address : $scope.address || null,
                mtrs : $scope.mtrs || null,
                date : $scope.date || null,
                time : $scope.time || null
            });

            $state.go('campaings.history');
        }

  

        $scope.geolocalizar = function () {


            $uibModal.open({
                animation: true,
                templateUrl: 'app/pages/campaings/widgets/geolocalization.html',
                size: 'lg',
                controller: function () {
                    $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + $scope.address)
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
                                radius: $scope.mtrs
                            });
                            marker.setMap(map);
                        });
                }
            });

        }

    }


})();