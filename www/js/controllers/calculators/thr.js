// THR Calculator Controller
angular.module('healthCalculators')
.controller('ThrCtrl', function($scope) {

    $scope.calcThr = function() {
        var age = $scope.user.info.age;
        var target_hr = $scope.user.info.desired_hr;

        var max_hr = 220 - age;
        target_hr /= 100;
        target_hr = Math.round(max_hr * target_hr);

        $scope.user.info.max_hr = max_hr + ' BPM';
        $scope.user.info.target_hr = target_hr + ' BPM';
    };
});
