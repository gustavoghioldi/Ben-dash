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
            console.log("delete Branck");
            partnersRef.child($stateParams.key + "/details/branchs/" + key).remove();
        }
        $scope.addBranch = function(modal) {
            console.log("addBranch");
            console.log(modal.$dismiss());
            partnersRef.child($stateParams.key + "/details/branchs").push({
                name: $scope.partners.details.branchs.name
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