(function () {
    'use strict';

    angular.module('BlurAdmin.pages.campaings.email')
        .controller('PushCtrl', PushCtrl);

    /** @ngInject */
    function PushCtrl($scope, $state, $uibModal) {
        tinymce.init({ selector:'textarea' });

    }


})();