/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.categories.list')
        .controller('ListCtrl', ListCtrl);

    /** @ngInject */
    function ListCtrl($scope, $state) {

        categoriesRef.on('value', function(ss) {
            $scope.categories = ss.val();
            console.log($scope.categories);
        });

        $scope.addCategory = function() {
            $state.go("categories.add");
        };

    }


})();