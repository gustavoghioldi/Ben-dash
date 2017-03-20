/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.suport')
        .controller('SuportConfigTypesCtrl', SuportConfigTypesCtrl);

    /** @ngInject */
    function SuportConfigTypesCtrl($scope) {
        console.log('SuportConfigTypesCtrl...');
        suportRef.child('/types').on('value', function	(ss){
        	$scope.types = ss.val();
        	console.log($scope.types); 
        });

        $scope.save = function(){
        	console.log("Guardo el tipo");
        	suportRef.child("/types").push({
                        name: $scope.name
                    });
        }

        $scope.delete = function (key){
        	console.log(key);
        	if(confirm("esta Seguri que desea borrar este tipo de tikets?")){
        	console.log(suportRef.child("types/"+key).remove());
        }
        }
    }

})();