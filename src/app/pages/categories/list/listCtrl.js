/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.categories.list')
        .controller('ListCtrl', ListCtrl);

    /** @ngInject */
    function ListCtrl($scope, $uibModal) {
        $scope.data = "ListCtrl...";
        var dataRef = firebase.database().ref('/communities/la_caja/categories');

        dataRef.on('value', function(ss) {
            $scope.categories = ss.val();
            console.log($scope.categories);
        });

        $scope.modalAddCategory = function() {
            $uibModal.open({
                animation: true,
                templateUrl: "app/pages/categories/modals/create.html",
                size: 'lg'

            });
        };
    }


})();