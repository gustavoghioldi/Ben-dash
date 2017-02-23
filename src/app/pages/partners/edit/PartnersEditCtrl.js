(function() {
    'use strict';

    angular.module('BlurAdmin.pages.partners')
        .controller('PartnersEditCtrl', PartnersEditCtrl);

    /** @ngInject */
    function PartnersEditCtrl($scope, $state, toastr, $stateParams, $uibModal) {

        console.log("PartnersEditCtrl...");
        console.log($stateParams);
        if ($stateParams.key) {
            partnersRef.child($stateParams.key).on('value', function(ss) {
                console.log(ss.val());
                $scope.partner = ss.val();
            });
        }

        $scope.editDetails = function() {
            console.log("editDetails");
        }

        $scope.editImage = function() {
            console.log("editImage");
        }

        $scope.editInfo = function(info) {
            console.log("editInfo");
            console.log($scope.partner);
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
            console.log("delete Branch");
            partnersRef.child($stateParams.key + "/details/branchs/" + key).remove();
        }
        $scope.addBranch = function(modal) {
            console.log("addBranch");
            console.log(modal.$dismiss());
            partnersRef.child($stateParams.key + "/details/branchs").push({
                name: $scope.partners.details.branchs.name,
                address: $scope.partners.details.branchs.address || null,
                state: $scope.partners.details.branchs.state || null,
                city: $scope.partners.details.branchs.city || null,
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


        $scope.open = function(page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,

            });
        }


    }


})();