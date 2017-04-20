/**
 * @module {Controller} LbmCtrl
 * @desc   Lean Body Mass Calculator Controller
 * @param  {Object}  $scope  - View data binding
 * @param  {Factory} globals - Global variables
 **/
angular.module('healthCalculators')
  .controller('LbmCtrl', function($scope, globals) {
    var pounds, bodyfat, lbm;

    /**
     * @function calcLbm
     * @desc     Calculates lean body mass
     **/
    $scope.calcLbm = function() {
      var userData = $scope.setUserData();

      userLbm = userData.pounds - userData.bodyfat;
      $scope.results.lbm = userLbm + globals.lbs;
    };

  });
