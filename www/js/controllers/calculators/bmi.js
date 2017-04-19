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

      height = $scope.user.info.feet * 12 + $scope.user.info.inches;
      pounds = $scope.user.info.pounds;
      bmi    = ((pounds / (height * height)) * 703).toFixed(2);
      $scope.user.info.bmi = bmi;

      if (bmi < 18.5) {
        weightType = 'Underweight';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        weightType = 'Normal';
      } else if (bmi >= 25 && bmi <= 29.9) {
        weightType = 'Overweight';
      } else if (bmi >= 30 && bmi <= 39.9) {
        weightType = 'Obese';
      } else if (bmi >= 40) {
        weightType = 'Morbidly Obese';
      }
      $scope.user.info.category = weightType;
    };

  });
