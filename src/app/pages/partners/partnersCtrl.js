(function() {
    'use strict';

    angular.module('BlurAdmin.pages.partners')
        .controller('PartnersCtrl', PartnersCtrl);

    /** @ngInject */
    function PartnersCtrl($scope, $state, toastr) {
        console.log("PartnersCtrl...");

        partnersRef.on('value', function(ss) {
            $scope.partners = ss.val();
            console.log($scope.partners);
            $scope.partnersArray = [];

            ss.forEach(function(ssChild) {
                var key = ssChild.key;
                var aux = { name: ssChild.val().name, key: key };
                $scope.partnersArray.push(aux);
                console.log($scope.partnersArray);
            });
        });

        $scope.partnerSelected = function() {
            console.log($scope.partners.selected);
            console.log($scope.partners.selected.key);

            $scope.edit($scope.partners.selected.key);
        }

        $scope.addPartner = function() {
            $state.go("partners.add");
        }

        $scope.onClickAdd = function() {


            partnersRef.orderByChild("code").equalTo($scope.code).on('value', function(ss) {

                if (!ss.val()) {
                    var key = partnersRef.push({
                        name: $scope.name,
                        code: $scope.code
                    }).key;
                    $scope.edit(key);
                }
            });
        }

        $scope.delete = function(key) {
            partnersRef.child(key).remove();
        }

        $scope.edit = function(key) {
            console.log('PartnersCtrl.edit ...');
            console.log(key);
            $state.go('partners.edit', { key: key });
        }

        $scope.view = function(key) {
            console.log(key);
            $state.go('partners.view', { key: key });
        }

        $scope.toast = function() {
            toastr.success('Agregado con exito', 'ya puede gestionar sta categoria', {
                "autoDismiss": false,
                "positionClass": "toast-top-full-width",
                "type": "success",
                "timeOut": "5000",
                "extendedTimeOut": "2000",
                "allowHtml": false,
                "closeButton": false,
                "tapToDismiss": true,
                "progressBar": false,
                "newestOnTop": true,
                "maxOpened": 0,
                "preventDuplicates": false,
                "preventOpenDuplicates": false
            })
        }

    }



})();