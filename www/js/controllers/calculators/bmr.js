// BMR Calculator Controller

angular.module('healthCalculators')
.controller('BmrCtrl', function ($scope) {
  var augend,
      heightMultiplicand,
      poundsMultiplicand,
      ageMultiplicand;

    $scope.calcBmr = function() {
      var height = $scope.user.info.feet * 12 + $scope.user.info.inches;
      var pounds = $scope.user.info.pounds;
      var age = $scope.user.info.age;
      var gender = $scope.user.info.gender;
      
        if(isNaN(height, pounds, age))
            return;

        if(gender.male) {
          augend = 655;
          heightMultiplicand = 4.35;
          poundsMultiplicand = ageMultiplicand = 4.7;
        } else if(gender.female) {
          augend = 66;
          heightMultiplicand = 6.23;
          poundsMultiplicand = 12.7;
          ageMultiplicand = 6.8;
        }

        var bmr = (augend + (poundsMultiplicand * pounds) + (heightMultiplicand * height) -
                   (ageMultiplicand * age)).toFixed(2);
        $scope.user.info.bmr = bmr.toString() + '  Calories/Day';
    };

});
