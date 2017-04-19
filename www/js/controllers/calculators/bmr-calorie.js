/**
 * @module {Controller} Bmr-CalorieCtrl
 * @desc   Basal Metabolic Rate & Caloric Intake Calculator Controller
 * @param  {Object} $scope - View data binding
 **/
angular.module('healthCalculators')
  .controller('Bmr-CalorieCtrl', function($scope, globals) {
    var addend, bmr, age, gender, height_cm, weight_kg, result;

    /**
     * @function calcBmr
     * @desc     Calculates basal metabolic rate
     **/
    $scope.calcBmr = function() {
      age       = $scope.user.info.age;
      gender    = $scope.user.info.gender;
      height_cm = ($scope.user.info.feet * 12 + $scope.user.info.inches) * 2.54;
      weight_kg = ($scope.user.info.pounds) * 0.45359237;

      // Set value addend based on gender
      if (gender.male)
        addend = 5;
      else // Female
        addend = -161;

      bmr = Math.round(((10 * weight_kg) + (6.25 * height_cm) - (5 * age) + addend));
      $scope.user.info.bmr = bmr + globals.CAL_DAY;
    };

    /**
     * @function calcCalories
     * @desc     Calculates daily caloric intake
     * @param    {String} activity  - Activity level of user
     * @default  {String} Sedentary - Sedentary activity level
     **/
    $scope.calcCalories = function(activity = 'Sedentary') {
      $scope.calcBmr();

      // Determine activity level multiplier
      switch (activity) {
        case 'Sedentary':
          bmr *= 1.2;
          break;
        case 'Lightly Active':
          bmr *= 1.375;
          break;
        case 'Moderately Active':
          bmr *= 1.55;
          break;
        case 'Very Active':
          bmr *= 1.725;
          break;
        case 'Extra Active':
          bmr *= 1.9;
          break;
      }

      $scope.user.info.cal_maintain = Math.round(bmr) + globals.CAL_DAY;
      $scope.user.info.cal_lose1    = Math.round((bmr - 500))  + globals.CAL_DAY;
      $scope.user.info.cal_lose2    = Math.round((bmr - 1000)) + globals.CAL_DAY;
      $scope.user.info.cal_gain1    = Math.round((bmr + 500))  + globals.CAL_DAY;
      $scope.user.info.cal_gain2    = Math.round((bmr + 1000)) + globals.CAL_DAY;
    };

  });
