/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.members')
        .controller('MembersAddCtrl', MembersAddCtrl);

    /** @ngInject */
    function MembersAddCtrl($scope, $http) {
        console.log('MembersAddCtrl...');



        $scope.addMember = function (modal) {
            console.log($scope);
            modal.$dismiss();
            var newKey = membersRef.push({
                firstname: $scope.firstname,
                lastname: $scope.lastname,
                dni: $scope.dni,
                email: $scope.email,
                state: $scope.state,
                city: $scope.city
            }).key;
            //esto pasarlo a funcion firebase(beta)
            membersRef.child(newKey).on('value', function (ss) {
                var newMember = ss.val();
                $http.post('/api.benefit.com.ar?cardID=' + ss.key, data)
                    .then(function (res) { console.log(res) }, function (err) { console.log(err) });
            });
        }

    }

})();