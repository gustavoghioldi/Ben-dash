(function () {
    'use strict';

    angular.module('BlurAdmin.pages.campaings.email')
        .controller('PushCtrl', PushCtrl);

    /** @ngInject */
    function PushCtrl($scope, $state, $uibModal) {
        tinymce.init({ selector:'textarea' });
        $scope.tinymceModel = '';

        $scope.getContent = function () {
            console.log('Editor content:', $scope.tinymceModel);
        };

        $scope.setContent = function () {
            $scope.tinymceModel = 'Time: ' + (new Date());
        };
        
        $scope.tinymceOptions = {
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
            
        };

    }


})();