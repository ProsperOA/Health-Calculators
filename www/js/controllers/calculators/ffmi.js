// FFMI Calculator Controller

angular.module('healthCalculators')
.controller('FfmiCtrl', function ($scope) {
    $scope.calcFfmi = function() {
      var height = $scope.user.info.feet * 12 + $scope.user.info.inches;
      var pounds = $scope.user.info.pounds;
      var bodyfat = $scope.user.info.bodyfat;
      
        if(isNaN(height, pounds, bodyfat))
            return;
        
        var weight_kg = pounds / 2.20462;
        var leanMass = (weight_kg) * (1.0 - (bodyfat / 100));
        var ffmi = (leanMass / 2.2) / Math.pow(height * 0.0254, 2) * 2.20462;
        var adjFfmi = ffmi + (6.0 * ((height * 0.0254) - 1.8));
        
        $scope.user.info.leanMass = (leanMass * 2.20462).toFixed(2).toString() + ' lbs';
        $scope.user.info.ffmi = ffmi.toFixed(2).toString();
        $scope.user.info.adjFfmi = adjFfmi.toFixed(2).toString();
      
        if(ffmi <= 17) {
            $scope.user.info.category = 'Below Average';
        } else if(ffmi > 17 && ffmi <= 19) {
            $scope.user.info.category = 'Average';
        } else if(ffmi > 19 && ffmi <= 21) {
            $scope.user.info.category = 'Above Average';
        } else if(ffmi > 21 && ffmi <= 22) {
            $scope.user.info.category = 'Excellent';
        } else if(ffmi > 22 && ffmi <= 25) {
            $scope.user.info.category = 'Superior';
        } else if(ffmi > 25 && ffmi <= 27) {
            $scope.user.info.category = 'Suspicious';
        } else if(ffmi > 27) {
            $scope.user.info.category = 'Highly Unlikely';
        } else {
            alert('Please enter a valid value');
        }
    };
    
});