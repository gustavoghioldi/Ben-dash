'use strict';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDsWxsQw9Z9iJCxWbAn-KefF-39F6lvCVA",
    authDomain: "benefit-cb2e2.firebaseapp.com",
    databaseURL: "https://benefit-cb2e2.firebaseio.com",
    storageBucket: "benefit-cb2e2.appspot.com",
    messagingSenderId: "101979769721"
};
firebase.initializeApp(config);



//json: https://benefit-cb2e2.firebaseio.com/communities.json

var categoriesRef = firebase.database().ref('/communities/la_caja/categories');
var configRef = firebase.database().ref('/communities/la_caja/config');
var partnersRef = firebase.database().ref('/communities/la_caja/partners');
var productsRef = firebase.database().ref('/communities/la_caja/products');
var rolsRef = firebase.database().ref('/communities/la_caja/rols');
var usersRef = firebase.database().ref('/communities/la_caja/users');
var membersRef = firebase.database().ref('/communities/la_caja/members');
var suportRef = firebase.database().ref('/communities/la_caja/suport');
var transactionsRef = firebase.database().ref('/communities/la_caja/transactions');

angular.module('BlurAdmin', [
    'ja.qr',
    'ngAnimate',
    'ui.bootstrap',
    'ui.sortable',
    'ui.router',
    'ngTouch',
    'toastr',
    'smart-table',
    "xeditable",
    'ui.slimscroll',
    'ngJsTree',
    'angular-progress-button-styles',
    'BlurAdmin.theme',
    'BlurAdmin.pages',
]).run(function($rootScope, $location){
   
$rootScope.$on('$locationChangeStart', function(event, next, current){
    console.log(firebase.auth().currentUser);
        $rootScope.userAuth = firebase.auth().currentUser;
    });
});
