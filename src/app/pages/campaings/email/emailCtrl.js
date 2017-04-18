

/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.campaings.email')
        .controller('EmailCtrl', EmailCtrl);

    /** @ngInject */
    function EmailCtrl($scope, $state, $uibModal) {
        $scope.tinymceModel = 'Initial content';

        $scope.getContent = function () {
            console.log('Editor content:', $scope.tinymceModel);
        };

        $scope.setContent = function () {
            $scope.tinymceModel = 'Time: ' + (new Date());
        };

        $scope.tinymceOptions = {
            plugins: ["advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"],
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
            templates: [
                { title: 'Some title 1', description: 'Some desc 1', content: '<h1>sdasdasd</h1>' }
            ]
        };

    }


})();