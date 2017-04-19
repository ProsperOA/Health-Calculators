'use strict';

angular.module('healthCalculators')
.factory('loginFactory', function ($q, $http, $rootScope, $location, $window) {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  var auth     = firebase.auth();
  var database = firebase.database();
  var user = {
    'uid'    : '',
    'name'   : '',
    'email'  : '',
    'img'    : '',
    'active' : false
  };
  var env = { 'loggedIn': false };
  var observerCallbacks = [];

  var notifyObservers = function() {
    angular.forEach(observerCallbacks, function(callback){
      callback();
    });
  };

  var updateLoginDate = function(u) {
    var deferred = $q.defer();
    database.ref('users').child(u.uid).once('value',
        function(snapshot) {
          // get the user data
          user = snapshot.val();
          // this user exists, update login date
          if (snapshot.exists()) {
            database.ref('users').child(u.uid).update({
              'last_login': new Date()
            }).then(
              function() {
                deferred.resolve('successful');
              }.bind(this)).catch(function(error) {
                deferred.reject('error');
            });
          }
          // this user is new, add all their info with default email alias
          else {
            database.ref('users').child(u.uid).update({
              'last_login': new Date(),
              'img': u.photoURL,
              'email': u.email,
              'name': u.name
              }).then(
                function() {
                  $location.path("#/");
                  $location.reload();
                deferred.resolve('successful');
              }.bind(this)).catch(function(error) {
                deferred.reject('error');
            });
          }
        })
    return deferred.promise;
  };

  var onAuthStateChanged = function(currentUser) {
    if (currentUser) {
      updateLoginDate(currentUser).then(
        // The user exists and is verified
        function(success) {
          database.ref('users').child(currentUser.uid).once('value',
            function(data) {
              env.loggedIn = true;
              notifyObservers();
            }).then(
            function() {
              // none
            }.bind(this)).catch(
              function(error) {
                console.error('user is not a member', error);
              });
        // The user is not verified
        },
        function(error) {
          user.uid = currentUser.uid;
          user.name = currentUser.displayName
          user.email = currentUser.email;
          user.img = currentUser.photoURL;
          env.loggedIn = true;
        });
    }
    else { // User is signed out!
      user = {'uid':'', 'name':'', 'email':'', 'img':'', 'active':false};
      notifyObservers();
    }
  };
  auth.onAuthStateChanged(onAuthStateChanged.bind(this));

  var service = {
    signIn: function() {
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        env.loggedIn = true;
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
    },
    signOut: function() {
      firebase.auth().signOut().then(function() {
        $location.path('/home'); // return to home screen
        notifyObservers();
        env.loggedIn = false;
      }, function(error) {
        // An error happened.
      });
    },
    checkSignedIn: function() {
      if(auth.currentUser)
        return true;

      return false;
    },
    getUser: function() {
      return user;
    },
    getEnv: function() {
      return env;
    },
    registerObserverCallback: function(callback){
      observerCallbacks.push(callback);
    }
  };

  return service;
});
