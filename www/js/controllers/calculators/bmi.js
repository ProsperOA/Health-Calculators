// BMI Calculator Controller

angular.module('healthCalculators')
.controller('BmiCtrl', function($scope) {
    $scope.calcBmi = function() {
      
        var height = $scope.user.info.feet * 12 + $scope.user.info.inches;
        var pounds = $scope.user.info.pounds;

        var bmi = ((pounds / (height * height)) * 703).toFixed(2);
        $scope.user.info.bmi = bmi.toString();

        if (bmi < 18.5) {
            $scope.user.info.category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            $scope.user.info.category = 'Normal';
        } else if (bmi >= 25 && bmi <= 29.9) {
            $scope.user.info.category = 'Overweight';
        } else if (bmi >= 30 && bmi <= 39.9) {
            $scope.user.info.category = 'Obese';
        } else if (bmi >= 40) {
            $scope.user.info.category = 'Morbidly Obese';
        } else {
            console.error('Invalid value');
        }
    };

});
