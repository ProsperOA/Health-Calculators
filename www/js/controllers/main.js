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
    var userData   = {};
    $scope.results = {};

    $scope.setUserData = function() {
      angular.forEach($scope.user.info, function(val, $key) {
        $scope.user.info.$key = val;

        // FIXME: loop returning '$key' when iterating
        if ($key === '$key')
          return;

        // Set user data values
        switch ($key) {
          case 'feet':
            userData.feet = val;
            break;
          case 'inches':
            userData.inches = val;
            break;
          case 'pounds':
            userData.pounds = val;
            break;
          case 'age':
            userData.age = val;
            break;
          case 'bodyfat':
            userData.bodyfat = val;
            break;
          case 'gender':
            if (val.male) { userData.gender = 'male'; } else { userData.gender = 'female'; }
            break;
          default:
            console.warn('{'+$key+': '+val+'} was not added to user data.');
        }
      });
      return userData;
    }

    // Reset all $scope values for user.info
    $scope.clear = function() {
      $scope.user.info = {};
      $scope.results   = {};
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
          $scope.user       = loginFactory.getUser();
          userData.fullName = loginFactory.getUser().name;
          userData.firstName = userData.fullName.substring(0, userData.fullName.indexOf(' '));
          $scope.user.name   = userData.firstName;

          $scope.env = loginFactory.getEnv();
          $scope.$apply();
        });
      }
    );

  });
