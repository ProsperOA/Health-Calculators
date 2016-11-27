// BMR Calculator Controller

angular.module('healthCalculators')
.controller('BmrCtrl', function ($scope) {
  var addend;

    $scope.calcBmr = function() {
      var height_cm = ($scope.user.info.feet * 12 + $scope.user.info.inches) * 2.54;
      var weight_kg = ($scope.user.info.pounds) * 0.45359237;
      var age = $scope.user.info.age;
      var gender = $scope.user.info.gender;
      
      if(isNaN(height_cm, weight_kg, age, gender))
          return;

      if(gender.male) {
        addend = 5;
      } else if(gender.female) {
        addend = -161;
      }

      var bmr = ((10 * weight_kg) + (6.25 * height_cm) - (5 * age) + addend).toFixed(2);
      $scope.user.info.bmr = bmr.toString() + '  Calories/Day';
    };

});
