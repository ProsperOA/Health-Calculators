/**
 * @module {Controller} MainCtrl
 * @desc   Global Controller
 * @param  {Object}  $scope       - View data binding
 * @param  {Object}  $rootScope   - Root view data binding
 * @param  {Object}  $timeout     - Timeout function
 * @param  {Factory} loginFactory - Login factory
 **/
angular.module('healthCalculators')
  .controller('MainCtrl', function($scope, $rootScope, $timeout, loginFactory) {
    var first_name, feet, inches, weight, age, body_fat, gender;

    $scope.setUserData = function() {
      angular.forEach($scope.user.info, function(val, $key) {
        $scope.user.info.$key = val;
      });
    }

    // Reset all $scope values for user.info
    $scope.reset = function() {
      $scope.user.info = {};
    };

    $scope.user = loginFactory.getUser();
    $scope.env  = loginFactory.getEnv();

    // Sign In, Sign Out
    $scope.signIn = function() {
      loginFactory.signIn();
    };
    $scope.signOut = function() {
      loginFactory.signOut();
    };

    /**
     * @function registerObserverCallback
     * @desc
     **/
    loginFactory.registerObserverCallback(
      function() {
        $timeout(function() {
          $scope.user = loginFactory.getUser();
          first_name = loginFactory.getUser().name;
          first_name = first_name.substring(0, first_name.indexOf(' '));
          $scope.user.name = first_name;

          $scope.env = loginFactory.getEnv();
          $scope.$apply();
        });
      }
    );

  });
