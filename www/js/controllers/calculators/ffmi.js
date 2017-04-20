/**
 * @module {Controller} FfmiCtrl
 * @desc   Fat Free Muscle Index Calculator Controller
 * @param  {Object} $scope - View data binding
 **/
angular.module('healthCalculators')
  .controller('FfmiCtrl', function($scope) {
    var height, bodyfat, weight_kg, leanMass, ffmi, adjFfmi;

    /**
     * @function calcFfmi
     * @desc     Calculates fat free muscle index
     **/
    $scope.calcFfmi = function() {
      userData = $scope.setUserData();

      height    = (userData.feet * 12) + userData.inches;
      weight_kg = userData.pounds / 2.20462;
      leanMass  = weight_kg * (1.0 - (userData.bodyfat / 100));
      ffmi      = (leanMass / 2.2) / Math.pow(height * 0.0254, 2) * 2.20462;
      adjFfmi   = ffmi + (6.0 * ((height * 0.0254) - 1.8));

      $scope.results.ffmi    = ffmi.toFixed(2);
      $scope.results.adjFfmi = adjFfmi.toFixed(2);

      if (ffmi < 18) {
        $scope.results.ffmi_category = 'Below Average';
      } else if (ffmi >= 18 && ffmi <= 19.9) {
        $scope.results.ffmi_category = 'Average';
      } else if (ffmi >= 20 && ffmi <= 21.9) {
        $scope.results.ffmi_category = 'Above Average';
      } else if (ffmi >= 22 && ffmi <= 22.9) {
        $scope.results.ffmi_category = 'Excellent';
      } else if (ffmi >= 23 && ffmi <= 25.9) {
        $scope.results.ffmi_category = 'Superior';
      } else if (ffmi >= 26 && ffmi <= 27.9) {
        $scope.results.ffmi_category = 'Suspicious';
      } else if (ffmi >= 28) {
        $scope.results.ffmi_category = 'Highly Unlikely';
      } else {
        console.error('ERROR: Invalid value.');
      }
    };

  });
