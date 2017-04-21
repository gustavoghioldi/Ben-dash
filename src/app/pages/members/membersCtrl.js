/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.members')
        .controller('MembersCtrl', MembersCtrl);

    /** @ngInject */
    function MembersCtrl($scope, $state, toastr, $stateParams, $uibModal, $http) {
        console.log('MembersCtrl...');

        membersRef.on('value', function (ss) {
            $scope.members = ss.val();
            console.log($scope.members);
        });

        $scope.open = function (page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,
            });
        }

        $scope.view = function (key) {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/pages/members/widgets/member.data.modal.html',
                size: 'lg',
                scope: $scope,
                controller: function () {
                    membersRef.child(key).on('value', function (ss) {
                        $scope.member = ss.val();
                        console.log($scope.member);
                        $http.get("https://graph.facebook.com/v2.8/me?fields=id,name,picture,cover,age_range,timezone,updated_time,verified,gender,locale&access_token=" + $scope.member.credential.accessToken + "&debug=all")
                            .then(function (data) {
                                $scope.facebookData = data.data;
                                console.log(data.data);
                            });
                    });
                }

            });
        }

        $scope.facebook = function (key) {

        }



    }

})();