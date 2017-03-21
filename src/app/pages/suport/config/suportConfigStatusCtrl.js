/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.suport')
        .controller('SuportConfigStatusCtrl', SuportConfigStatusCtrl);

    /** @ngInject */
    function SuportConfigStatusCtrl($scope) {
        console.log('SuportConfigStatusCtrl...');

        	  suportRef.child('/status').on('value', function	(ss){
        	$scope.status = ss.val();
        	console.log($scope.status); 
        });

         $scope.save = function(){
        	console.log("Guardo el tipo");
        	suportRef.child("/status").push({
                        name: $scope.name
                    });
        }

        $scope.delete = function (key){
        	console.log(key);
        	if(confirm("esta Seguri que desea borrar este status de tikets?")){
        	console.log(suportRef.child("status/"+key).remove());
        }
        }

    }

})();