/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.categories.add')
        .controller('AddCtrl', AddCtrl);

    /** @ngInject */
    function AddCtrl($scope, $state) {
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

                $state.go('categories.list');
            });
        }

    }

})();