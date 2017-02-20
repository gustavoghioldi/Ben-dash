(function() {
    'use strict';

    angular.module('BlurAdmin.pages.partners')
        .controller('PartnersEditCtrl', PartnersEditCtrl);

    /** @ngInject */
    function PartnersEditCtrl($scope, $state, toastr, $stateParams) {

        console.log("PartnersEditCtrl...");
        console.log($stateParams);
        $scope.editDetails = function() {
            console.log("editDetails");
        }

        $scope.editImage = function() {
            console.log("editImage");
        }

        $scope.editInfo = function() {
            console.log("editInfo");
        }
    }


})();