/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.categories')
        .controller('CategoriesCtrl', CategoriesCtrl);

    /** @ngInject */
    function CategoriesCtrl($scope, $state, $uibModal) {

        categoriesRef.on('value', function(ss) {
            $scope.categories = ss.val();
            console.log($scope.categories);
        });



        $scope.onClickAdd = function() {
            console.log('onClickAdd...');
            console.log($scope.name);
            categoriesRef.orderByChild("code").equalTo($scope.code).on('value', function(ss) {
                if (!ss.val()) {
                    categoriesRef.push({
                        name: $scope.name,
                        code: $scope.code
                    });
                }

                $state.go('categories.list');
            });
        }

        $scope.addCategory = function() {
            $state.go('categories.add');
        }

        $scope.delete = function(key) {
            if (confirm("Esta seguro que desea borrar esta categoria?")) {
                categoriesRef.child(key).remove();
                $state.go('categories.list');
            }
        }

        $scope.edit = function(key, item) {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/pages/categories/widgets/edit.modal.html',
                size: 'lg',
                controller: function($scope) {
                    $scope.category = item;
                    $scope.key = key;
                    $scope.edit = function(modal) {
                        console.log(modal);
                        modal.$dismiss;
                        categoriesRef.child($scope.key).set({
                            name: $scope.category.name,
                            code: $scope.category.code
                        });
                    }
                }
            });
        }

        $scope.view = function(item) {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/pages/categories/widgets/view.modal.html',
                size: 'lg',
                controller: function($scope) {
                    $scope.category = item;
                }
            });
        }

    }


})();