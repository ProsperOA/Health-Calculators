/**
 * @module {Controller} ThrCtrl
 * @desc   Target Heart Reate Calculator Controller
 * @param  {Object} $scope - View data binding
 **/
angular.module('healthCalculators')
.controller('ThrCtrl', function($scope) {
  var target_hr, max_hr;

  /**
   * @function calcThr
   * @desc     Calculates target heart rateds
   **/
  $scope.calcThr = function() {
   var userData = $scope.setUserData();

    target_hr = $scope.user.info.desired_hr;
    max_hr    = 220 - userData.age;
    target_hr /= 100;
    target_hr = Math.round(max_hr * target_hr);

    $scope.results.max_hr    = max_hr    + ' BPM';
    $scope.results.target_hr = target_hr + ' BPM';
  };
});
