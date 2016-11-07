// BMI Calculator Controller

angular.module('healthCalculators')
.controller('BmrCtrl', function ($scope) {
  
    $scope.calcBmr = function(feet, inches, pounds, age) {
        if(isNaN(feet) || isNaN(inches) || isNaN(pounds) || isNaN(age))
            return;
      
        var height = feet * 12 + inches;
        var bmi = ((pounds / (height * height)) * 703).toFixed(2);
        $scope.bmi = bmi.toString();
      
        if(bmi < 18.5) {
            $scope.category = 'Underweight';
        } else if(bmi >= 18.5 && bmi <= 24.9) {
            $scope.category = 'Normal';
        } else if(bmi >= 25 && bmi <= 29.9) {
            $scope.category = 'Overweight';
        } else if(bmi >= 30 && bmi <= 39.9) {
            $scope.category = 'Obese';
        } else if(bmi >= 40) {
            $scope.category = 'Morbidly Obese';
        } else {
            alert('Please enter a valid value');
        }
    };
  
    // FIXME -- Doesn't reset form
    $scope.reset = function() {
        $scope.user = angular.copy($scope.originalForm);
        $scope.bmi = $scope.category = '';
    };
    $scope.reset();
    
});
  