(function () {
    'use strict';

    angular.module('BlurAdmin.pages.campaings.email')
        .controller('EmailCtrl', EmailCtrl);

    /** @ngInject */
    function EmailCtrl($scope, $state, $uibModal) {
        var template = '<p style="text-align: center;">TUMB</p>';
        template += '<table style="margin-left: auto; margin-right: auto;">';
        template += '<tbody>';
        template += '<tr>';
        template += '<td>&nbsp;<img src="http://placehold.it/100x100" alt="" width="100" height="100" /></td>';
        template += '<td><img src="http://placehold.it/100x100" alt="" width="100" height="100" />&nbsp;</td>';
        template += '<td><img src="http://placehold.it/100x100" alt="" width="100" height="100" />&nbsp;</td>';
        template += '</tr>';
        template += '<tr>';
        template += '<td>&nbsp;<img src="http://placehold.it/100x100" alt="" width="100" height="100" /></td>';
        template += '<td><img src="http://placehold.it/100x100" alt="" width="100" height="100" />&nbsp;</td>';
        template += '<td><img src="http://placehold.it/100x100" alt="" width="100" height="100" />&nbsp;</td>';
        template += '</tr>';
        template += '</tbody>';
        template += '</table>';
        tinymce.init({
            selector: 'textarea',
            plugins: ["advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"],

            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
            templates: [
                { title: 'Tabla de imagenes', description: 'tabla de imagenes', content: template }
            ]
        });
        $scope.tinymceModel = '';

        $scope.getContent = function () {
            console.log('Editor content:', $scope.tinymceModel);
        };

        
        $scope.tinymceOptions = {
            plugins: ["advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"],

            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
            templates: [
                { title: 'Tabla de imagenes', description: 'tabla de imagenes', content: template }
            ]
        };

    }


})();