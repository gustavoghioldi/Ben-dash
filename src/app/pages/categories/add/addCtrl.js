/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.categories.add')
        .controller('AddCtrl', AddCtrl);

    /** @ngInject */
    function AddCtrl($scope, $state, toastr) {
        console.log("AddCtrl...");
        $scope.onClickAdd = function() {


            categoriesRef.orderByChild("name").equalTo($scope.name).on('value', function(ss) {
                if (!ss.val()) {
                    categoriesRef.push({
                        name: $scope.name,
                        tags: $scope.tags,
                        codigo: $scope.codigo
                    });
                }
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
                $state.go('categories.list');
            });
        }

    }

})();