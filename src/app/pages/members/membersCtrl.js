/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.members')
        .controller('MembersCtrl', MembersCtrl);

    /** @ngInject */
    function MembersCtrl($scope, $state, toastr, $stateParams, $uibModal, $http) {
        console.log('MembersCtrl...');

        membersRef.on('value', function(ss) {
            $scope.members = ss.val();
            console.log($scope.members);
        });

        $scope.open = function(page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,
            });
        }

        $scope.facebook = function (key){
            $http.get("https://graph.facebook.com/v2.8/me?fields=id,name,picture,cover,age_range,timezone,updated_time,verified,gender,locale&access_token="+key+"&debug=all")
            .then(function(data){
                $scope.facebookData = data.data;
                
                $uibModal.open({
                    animation:true,
                    templateUrl: 'app/pages/members/widgets/member.facebook.modal.html',
                    size: 'lg',
                    scope: $scope
                });
            });
        }



    }

})();