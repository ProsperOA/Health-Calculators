// FFMI Calculator Controller

angular.module('healthCalculators')
.controller('FfmiCtrl', function ($scope) {
    $scope.calcFfmi = function(feet, inches, pounds, bodyfat) {
        if(isNaN(feet) || isNaN(inches) || isNaN(pounds) || isNaN(bodyfat))
            return;
        
        var height = feet * 12.0 + inches;
        var weight_kg = pounds / 2.20462;
        var leanMass = (weight_kg) * (1.0 - (bodyfat / 100));
        var ffmi = (leanMass / 2.2) / Math.pow(height * 0.0254, 2) * 2.20462;
        var adjFfmi = ffmi + (6.0 * ((height * 0.0254) - 1.8));
        
        $scope.leanMass = (leanMass * 2.20462).toFixed(2).toString() + ' lbs';
        $scope.ffmi = ffmi.toFixed(2).toString();
        $scope.adjFfmi = adjFfmi.toFixed(2).toString();
      
        if(ffmi <= 17) {
            $scope.category = 'Below Average';
        } else if(ffmi > 17 && ffmi <= 19) {
            $scope.category = 'Average';
        } else if(ffmi > 19 && ffmi <= 21) {
            $scope.category = 'Above Average';
        } else if(ffmi > 21 && ffmi <= 22) {
            $scope.category = 'Excellent';
        } else if(ffmi > 22 && ffmi <= 25) {
            $scope.category = 'Superior';
        } else if(ffmi > 25 && ffmi <= 27) {
            $scope.category = 'Suspicious';
        } else if(ffmi > 27) {
            $scope.category = 'Highly Unlikely';
        } else {
            alert('Please enter a valid value');
        }
    };
    
    $scope.reset = function() {
        $scope.ffmi =
        $scope.adjFfmi =
        $scope.leanMass =
        $scope.category = '';
    };
    $scope.reset();
});