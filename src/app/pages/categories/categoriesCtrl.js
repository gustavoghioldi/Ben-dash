/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.categories')
        .controller('CategoriesCtrl', CategoriesCtrl);

    /** @ngInject */
    function CategoriesCtrl($scope, $state) {

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
            categoriesRef.child(key).remove();
            $state.go('categories.list');
        }

        $scope.edit = function(key) {
            console.log(key);
            $state.go('categories.edit', { key: key });
        }

        $scope.view = function(key) {
            console.log(key);
            $state.go('categories.view', { key: key });
        }

    }


})();