(function() {
    'use strict';

    angular.module('BlurAdmin.pages.partners.list')
        .controller('PartnersCtrl', PartnersCtrl);

    /** @ngInject */
    function PartnersCtrl($scope, $state) {
        console.log("PartnersCtrl...");

         partnersRef.on('value', function(ss) {
            $scope.partners = ss.val();
            console.log($scope.partners);
        });

         $scope.addPartner = function(){
            $state.go("partners.add");
         }

        $scope.onClickAdd = function() {
            partnersRef.push({
                        name: $scope.name,
                        codigo: $scope.codigo
                    });
            $state.go("partners.edit");

            }
        }
    

})();