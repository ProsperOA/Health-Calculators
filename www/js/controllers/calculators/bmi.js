/**
 * @module {controller} bmictrl
 * @desc   body mass index calculator controller
 * @param  {object} $scope - view data binding
 **/
angular.module('healthCalculators')
  .controller('BmiCtrl', function($scope) {
    var height, userBmi, weightType;

    /**
     * @function calcBmi
     * @desc     Calculates body mass index
     **/
    $scope.calcBmi = function() {
      var userData = $scope.setUserData();

      height  = (userData.feet * 12) + userData.inches;
      userBmi = ((userData.pounds / (height * height)) * 703).toFixed(2);
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
