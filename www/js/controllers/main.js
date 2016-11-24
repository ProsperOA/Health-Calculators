// Login Page

angular.module('healthCalculators')
  .controller('MainCtrl', function ($scope, $rootScope, $timeout, loginFactory) {

    $scope.user = loginFactory.getUser();
    $scope.env = loginFactory.getEnv();

    $scope.signIn = function() {
      loginFactory.signIn();
    };
    $scope.signOut = function() {
      loginFactory.signOut();
    };

    loginFactory.registerObserverCallback(
      function() {
        $timeout(function() {
          $scope.user = loginFactory.getUser();
          $scope.env = loginFactory.getEnv();
          $scope.$apply();
        });
      }
    );

});
