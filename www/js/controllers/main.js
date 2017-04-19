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
    var userData = {};
    $scope.results = {};

    $scope.setUserData = function() {
      angular.forEach($scope.user.info, function(val, $key) {
        $scope.user.info.$key = val;
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
            userData.weight = val+' lbs';
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
            //console.log($key);
            //console.log(val);
        }
      });
      console.log(userData);
    }

    // Reset all $scope values for user.info
    $scope.reset = function() {
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
