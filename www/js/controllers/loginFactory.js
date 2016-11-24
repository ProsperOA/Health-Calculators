'use strict';

angular.module('healthCalculators')
.factory('loginFactory', function ($q, $rootScope, $http, $location, $window) {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  var auth = firebase.auth();
  var user = {'uid':'', 'name':'', 'email':'', 'img':'', 'active':false};
  var env = {'loggedIn': false};
  
  var service = {
    signIn: function() {
      firebase.auth().signInWithPopup(provider).then(function(result) {
        env.loggedIn = true;
        var token = result.credential.accessToken;
        var user = result.user;
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
    },
    signOut: function() {
      firebase.auth().signOut().then(function() {
        env.loggedIn = false;
      }, function(error) {
        // An error happened.
      });
    }
  };
    
  return service;
});
