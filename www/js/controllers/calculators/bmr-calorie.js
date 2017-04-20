/**
 * @module {Controller} Bmr-CalorieCtrl
 * @desc   Basal Metabolic Rate & Caloric Intake Calculator Controller
 * @param  {Object} $scope - View data binding
 **/
angular.module('healthCalculators')
  .controller('Bmr-CalorieCtrl', function($scope, globals) {
    var addend, userBmr;
    var userData = {};

    /**
     * @function calcBmr
     * @desc     Calculates basal metabolic rate
     **/
    $scope.calcBmr = function() {
      userData = $scope.setUserData();

      age       = userData.age;
      gender    = userData.gender;
      height_cm = ((userData.feet * 12) + userData.inches) * 2.54;
      weight_kg = (userData.pounds) * 0.45359237;

      // Set value addend based on gender
      if (gender.male)
        addend = 5;
      else // Female
        addend = -161;

      userBmr = Math.round(((10 * weight_kg) + (6.25 * height_cm) - (5 * age) + addend));
      $scope.results.bmr = userBmr + globals.CAL_DAY;
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
