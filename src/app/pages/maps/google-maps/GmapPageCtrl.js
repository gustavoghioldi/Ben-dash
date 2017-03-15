/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.maps')
        .controller('GmapPageCtrl', GmapPageCtrl);

    /** @ngInject */
    function GmapPageCtrl($timeout) {
        function initialize() {
            var mapCanvas = document.getElementById('google-maps');
            var myCenter = new google.maps.LatLng(51.508742, -0.120850);
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
    }

})();