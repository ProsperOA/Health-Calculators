/**
 * @module {Controller} Bmr-CalorieCtrl
 * @desc   Basal Metabolic Rate & Caloric Intake Calculator Controller
 * @param  {Object} $scope - View data binding
 **/
angular.module('healthCalculators')
  .controller('CaloricIntakeCtrl', function($scope, globals) {
    var userBmr;
    var userData = {};
    var calIntake = {
      'bmr': 'true'
    };

    $scope.calIntake = calIntake;

    /**
     * @function calcBmr
     * @desc     Calculates basal metabolic rate
     **/
    var calcBmr = function() {
      var addend;

      var height_cm = ((userData.feet * 12) + userData.inches) * 2.54;
      var weight_kg = (userData.pounds) * 0.45359237;

      // Set value addend based on gender
      if (userData.gender.male)
        addend = 5;
      else // Female
        addend = -161;

      userBmr = Math.round(((10 * weight_kg) + (6.25 * height_cm) - (5 * userData.age) + addend));
      $scope.results.bmr = userBmr + globals.CAL_DAY;
    };

    /**
     * @function calcCalories
     * @desc     Calculates daily caloric intake
     * @param    {String} activity  - Activity level of user
     * @default  {String} Sedentary - Sedentary activity level
     **/
    $scope.calcCalories = function(activity = 'Basal Metabolic Rate') {
      userData = $scope.setUserData();
      calcBmr();

      if (activity !== 'Basal Metabolic Rate') {
        calIntake.bmr = false;
      } else {
        calIntake.bmr = true;
      }

      // Determine activity level multiplier
      switch (activity) {
        case 'Basal Metabolic Rate':
          break;
        case 'Sedentary':
          userBmr *= 1.2;
          break;
        case 'Lightly Active':
          userBmr *= 1.375;
          break;
        case 'Moderately Active':
          userBmr *= 1.55;
          break;
        case 'Very Active':
          userBmr *= 1.725;
          break;
        case 'Extra Active':
          userBmr *= 1.9;
          break;
      }

      $scope.results.cal_maintain = Math.round(userBmr) + globals.CAL_DAY;
      $scope.results.cal_lose1    = Math.round((userBmr - 500))  + globals.CAL_DAY;
      $scope.results.cal_lose2    = Math.round((userBmr - 1000)) + globals.CAL_DAY;
      $scope.results.cal_gain1    = Math.round((userBmr + 500))  + globals.CAL_DAY;
      $scope.results.cal_gain2    = Math.round((userBmr + 1000)) + globals.CAL_DAY;
    };

  });
