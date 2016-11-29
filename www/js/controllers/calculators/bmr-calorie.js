// BMR & Calorie Calculator Controller

angular.module('healthCalculators')
.controller('Bmr-CalorieCtrl', function ($scope, $location) {
  var addend, bmr;
  
    // BMR Calculator
    $scope.calcBmr = function() {
      var height_cm = ($scope.user.info.feet * 12 + $scope.user.info.inches) * 2.54;
      var weight_kg = ($scope.user.info.pounds) * 0.45359237;
      var age = $scope.user.info.age;
      var gender = $scope.user.info.gender;
      
      if(isNaN(height_cm, weight_kg, age, gender.male))
          return;
    
      if(gender.male) {
        addend = 5;
      } else if(gender.female) {
        addend = -161;
      }
    
      bmr = Math.round(((10 * weight_kg) + (6.25 * height_cm) - (5 * age) + addend));
      $scope.user.info.bmr = bmr + ' Calories/Day';
    };
    
    // Calorie Calculator
    $scope.calcCalories = function(activity) {
      $scope.calcBmr();
      
      switch(activity) {
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
        default:
            console.error('No activity level chosen.\nActivity: ' + activity);
      }
      
      $scope.user.info.cal_maintain = bmr + ' Calories/Day';
      $scope.user.info.cal_lose1 = (bmr - 500) + ' Calories/Day';
      $scope.user.info.cal_lose2 = (bmr - 1000) + ' Calories/Day';
      $scope.user.info.cal_gain1 = (bmr + 500) + ' Calories/Day';
      $scope.user.info.cal_gain2 = (bmr + 1000) + ' Calories/Day';
    };

});
