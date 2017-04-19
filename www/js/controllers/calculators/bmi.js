/**
 * @module {Controller} BmiCtrl
 * @desc   Body Mass Index Calculator Controller
 * @param  {Object} $scope - View data binding
 **/
angular.module('healthCalculators')
  .controller('BmiCtrl', function($scope) {
    var height, pounds, bmi, category;

    /**
     * @function calcBmi
     * @desc     Calculates body mass index
     **/
    $scope.calcBmi = function() {
      $scope.setUserData();

      height = ($scope.user.info.feet * 12) + $scope.user.info.inches;
      pounds = $scope.user.info.pounds;
      userBmi    = ((pounds / (height * height)) * 703).toFixed(2);
      $scope.results.bmi = userBmi;

      if (userBmi < 18.5) {
        weightType = 'Underweight';
      } else if (userBmi >= 18.5 && userBmi <= 24.9) {
        weightType = 'Normal';
      } else if (userBmi >= 25 && userBmi <= 29.9) {
        weightType = 'Overweight';
      } else if (userBmi >= 30 && userBmi <= 39.9) {
        weightType = 'Obese';
      } else if (userBmi >= 40) {
        weightType = 'Morbidly Obese';
      }
      $scope.results.bmi_category = weightType;
    };

  });
