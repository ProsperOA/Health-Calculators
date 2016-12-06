// Lean Body Mass Calculator

angular.module('healthCalculators')
.controller('LbmCtrl', function($scope, globals) {
    $scope.calcLbm = function() {
        var pounds = $scope.user.info.pounds;
        var bodyfat = $scope.user.info.bodyfat;

        var lbm = (pounds - bodyfat);
        $scope.user.info.lean = lbm + globals.lbs;
    };

});
