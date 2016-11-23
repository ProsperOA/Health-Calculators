// BMR Calculator Controller

angular.module('healthCalculators')
.controller('BmrCtrl', function ($scope) {
  var augend,
  heightMultiplicand,
  poundsMultiplicand,
  ageMultiplicand;

    $scope.calcBmr = function(feet, inches, pounds, age, gender) {
        if(isNaN(feet, inches, pounds, age))
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

        var height = feet * 12 + inches;
        var bmr = (augend + (poundsMultiplicand * pounds) + (heightMultiplicand * height) -
                   (ageMultiplicand * age)).toFixed(2);
        $scope.bmr = bmr.toString();
    };

    // FIXME -- Doesn't reset form
    $scope.reset = function() {
        $scope.user = angular.copy($scope.originalForm);
        $scope.bmr = $scope.category = '';
    };
    $scope.reset();

});
