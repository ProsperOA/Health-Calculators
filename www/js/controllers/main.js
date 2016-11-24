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
          var first_name = loginFactory.getUser().name;
          first_name = first_name.substring(0, first_name.indexOf(' '));
          $scope.user.name = first_name;

          $scope.env = loginFactory.getEnv();
          $scope.$apply();
        });
      }
    );

});
